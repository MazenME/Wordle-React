import { useState } from "react"
import FirstBage from "./components/firstPage/FirstPage";
import GamePage from "./components/gamePage/GamePage";

function App() {

  const [first, setFirst] = useState(false)

  function hide (){
    setFirst(true)
  }

  return <>
  
  {first? <GamePage/> : <FirstBage hide={hide}/>}  
  
  </>;
}

export default App
