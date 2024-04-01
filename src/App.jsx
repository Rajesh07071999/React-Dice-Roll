import { useState } from "react"
import GameLandingPage from "./Components/GameLandingPage/GameLandingPage"
import GamePage from "./Components/GamePage/GamePage"


function App() {

  const [isGameStart,setIsGameStart] = useState(false)

  return (
    <>
    {
      isGameStart ? <GamePage/>  : <GameLandingPage setIsGameStart = {setIsGameStart}/>
    }
    </>
  )
}

export default App
