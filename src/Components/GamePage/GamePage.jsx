import { useState } from "react";
import "./GamePage.css";
import DiceRole from "../DiceRolePage/DiceRole";
import Swal from "sweetalert2";
const GamePage = () => {
  const arrayNumberLists = [1, 2, 3, 4, 5, 6];
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (value) => {
    setSelectedNumber(value);
  };

  const updateScore = () => {
    setScore(score + 10);
  };

  const resetScore = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, reset it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Reset!",
          text: "Your score has been reset ",
          icon: "success",
        });
        setScore(0);
      }
    });
  };

  const updateWrongScore = () => {
    setScore(score - 1);
  };

  return (
    <>
      <div className="game-nav-container">
        <div className="game-score">
          <h1>{score}</h1>
          <p>Total Score</p>
        </div>
        <div className="select-number-game">
          {arrayNumberLists.map((value, index) => (
            <div
              className={`select-number ${
                selectedNumber === value ? "selected" : ""
              }`}
              onClick={() => handleClick(value)}
              key={index}
            >
              <h1>{value}</h1>
            </div>
          ))}
        </div>
        <h3>Select Number</h3>
      </div>
      <DiceRole
        selectedNumber={selectedNumber}
        updateScore={updateScore}
        resetScore={resetScore}
        updateWrongScore={updateWrongScore}
      />
    </>
  );
};

export default GamePage;
