// import {wordList,guessList} from "../../words/words.ts";


// const wordIndex = Math.floor(Math.random() * wordList.length);
// const word = wordList[wordIndex].toUpperCase();

// const height = 6;
// const width = 5;
// let rows = 0;
// let cols = 0;
// let over = false;

// function typing() {
//   document.addEventListener("keyup", function (e) {
//     if (over) {
//       return;
//     }
//     if ("A" <= e.code[3] && e.code[3] <= "Z") {
//       if (cols < width) {
//         const tile = document.getElementById(`${rows}-${cols}`);
//         if (tile?.textContent == "") {
//           tile.textContent = e.code[3];
//           cols += 1;
//         }
//       }
//     } else if (e.code == "Backspace") {
//         if (cols > 0 && cols <= width) {
//             cols--;
//         }
//         const tile = document.getElementById(`${rows}-${cols}`);
//         if (tile) {
//             tile.textContent = "";
//         }
//     } else if (e.code == "Enter") {
//         checkWord();
//     }
//     if (!over && rows == height) {
//       over = true;
//       // document.getElementById("answer").innerText = word;
//       return;
//     }
//   });
// }



// function checkWord() {
//   let guess = "";
//   // document.getElementById("answer").innerText = "";
//   for (let j = 0; j < width; j++) {
//     const wordTile = document.getElementById(`${rows}-${j}`);
//     const letter = wordTile?.textContent;
//     guess += letter;
//   }
//   guess = guess.toLowerCase();

//   if (!guessList.includes(guess)) {
//     // document.getElementById("answer").innerText = "Not in word list";
//     setTimeout(function () {
//       window.location.reload();
//     }, 1000);
//   }

//   let correct = 0;
//   const lCounter: { [key: string]: number } = {};
//   for (let i = 0; i < word.length; i++) {
//     if (lCounter[word[i]]) {
//       lCounter[word[i]] += 1;
//     } else {
//       lCounter[word[i]] = 1;
//     }
//   }
//   for (let j = 0; j < width; j++) {
//     const wordTile = document.getElementById(`${rows}-${j}`);
//     const letter = wordTile?.textContent;
//     if (letter == word[j]) {
//       wordTile?.classList.add("bg-correct");
//       correct++;
//       lCounter[word[j]] -= 1;
//     }
//     if (correct == width) {
//       over = true;
//     }
//   }

//   for (let j = 0; j < width; j++) {
//     const wordTile = document.getElementById(`${rows}-${j}`);
//     const letter = wordTile?.textContent;
//     if (!wordTile?.classList.contains("bg-correct")) {
//       if (word.includes(letter || "") && lCounter[word[j]] > 0) {
//         wordTile?.classList.add("bg-wrong");
//         lCounter[word[j]] -= 1;
//       } else {
//         wordTile?.classList.add("bg-not-found");
//       }
//       if (correct == width) {
//         over = true;
//       }
//     }
//   }
//   rows += 1;
//   cols = 0;
// }