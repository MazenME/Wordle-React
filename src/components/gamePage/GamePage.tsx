import { wordList, guessList } from "../words/words";

import { useEffect, useState } from "react";
const wordIndex = Math.floor(Math.random() * wordList.length);
const word = wordList[wordIndex].toUpperCase();
 const height = 6;
 const width = 5;

export default function GamePage() {
  console.log(word);

  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [over, setOver] = useState(false);
 

  const [tiles, setTiles] = useState<Array<{row:number,col:number,text:string,classes:string}>>([]);
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    const newTiles = [];
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        newTiles.push({ row:i,col:j , text: "", classes: "" });
      }
    }
    setTiles(newTiles);
  }, []);

  useEffect(() => {
    function typing(e: KeyboardEvent) {
      if (over) {
        return;
      }
      if ("A" <= e.code[3] && e.code[3] <= "Z") {
        if (cols < width) {
          const updatedTilesCopy = tiles.map((tile) =>
            tile.row === rows &&tile.col === cols ? { ...tile, text: e.code[3] } : tile
            
          );
          setTiles(updatedTilesCopy);
          setCols(cols + 1); 
        }
      } else if (e.code === "Backspace") {
        if (cols > 0 && cols <= width) {
          setCols(cols - 1);
        }
        const updatedTilesCopy = tiles.map((tile) =>
          tile.row === rows && tile.col === cols
            ? { ...tile, text: "" }
            : tile
        );
        setTiles(updatedTilesCopy);
      } else if (e.code === "Enter") {
        checkWord();
        console.log(rows);
        if (!over && rows === height-1) {
          setOver(true);
          setAnswer(word);
          return;
        }
      }
    }

    document.addEventListener("keyup", typing);
    return () => document.removeEventListener("keyup", typing);
  }, [rows, cols, over, tiles]);

  function checkWord() {
    const updatedTilesCopy = [...tiles];

    let guess = "";
    setAnswer("");

     guess = updatedTilesCopy.filter((tile) => tile.row === rows).map((tile) => tile.text).join("");

    guess = guess.toLowerCase();

    if (!guessList.includes(guess)) {
      setAnswer("Not in word list");
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    }

    let correct = 0;
    const lCounter: { [key: string]: number } = {};
    for (let i = 0; i < word.length; i++) {
      if (lCounter[word[i]]) {
        lCounter[word[i]] += 1;
      } else {
        lCounter[word[i]] = 1;
      }
    }

    const wordNeeded = updatedTilesCopy.filter((tile) => tile.row === rows).map((tile) => tile.text).join("");

    for (let j = 0; j < width; j++) {
     
      const letter = wordNeeded[j];

      if (letter == word[j]) {
        updatedTilesCopy[rows* 5 + j].classes = "bg-correct";
        correct++;
        lCounter[word[j]] -= 1;
      } else if (word.includes(letter)) {
        updatedTilesCopy[rows * 5 + j].classes = "bg-wrong";
      } else {
        updatedTilesCopy[rows * 5 + j].classes = "bg-not-found";
      }
      if (correct === width) {
        setOver(true);

      }

    }

   

    setTiles(updatedTilesCopy);
    setRows(rows + 1);
    setCols(0) ;
  }


  return (
    <>
      <div className="container">
        <div>
          <h1>Wordle Game</h1>
          <hr />
        </div>
        <div className="game-page" id="game-page">
          <div id="board" className="">
            {tiles.map((tile, index) => {
              return (
                <span
                  key={index}
                  className={`tile ${tile.classes}`}
                >
                  {tile.text}
                </span>
              );
            })}
          </div>
          <div id="answer" className="mb-2">
            {answer}
          </div>
        </div>
      </div>
    </>
  );
}

