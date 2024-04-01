import './GameLandingPage.css'
function GameLandingPage({setIsGameStart}) {
  return (
    <>
        <div className="container">
            <div className="image-container">
            <img src="../../../public/Assets/Images/dices_1.png" alt="" />
            </div>
            <div className="text-content">
            <h1>DICE GAME</h1>
            <button onClick={()=>(setIsGameStart(true))} >Play Now</button>
            </div>
        </div>
    </>
  )
}

export default GameLandingPage