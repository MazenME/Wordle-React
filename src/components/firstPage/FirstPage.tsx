
interface Iprops {
    hide : () => void
}

export default function FirstPage(props : Iprops) {
    const { hide} = props

  return (
    <>
    <div>
        <div>
            <h1>Wordle Game</h1>
            <hr/>
        </div>
        <div className="first-page" id="first-page">
            <div className="info">
                <h3 className="m-3">
                    How to play 
                </h3>
                <p>
                    Guess the Wordle in 6 tries. <br/>
                    Each guess must be a valid 5-letter word. <br/>
                    The color of the tiles will change to show how close your guess was to the word. <br/>
                    
                </p>
                
                <h4>
                    <span className="correct">GREEN</span> tiles are correct letters in the correct position. <br/>
                    <span className="wrong">YELLOW</span> tiles are correct letters in the wrong position. <br/>
                    <span className="not-found">BLACK</span> tiles are letters that do not appear in the word.
                </h4>
            </div>

            <div className="play m-3">
                <button onClick={hide}
                id="play" type="button">PLAY NOW</button>
            </div>
        </div>

    </div>

    
    </>
  )
}
