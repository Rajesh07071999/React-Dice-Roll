import { useState } from "react";
import "./DiceRole.css";
import Swal from "sweetalert2";
import DiceGameRule from "../DiceGameRule/DiceGameRule";
const DiceRole = ({ selectedNumber, updateScore, resetScore , updateWrongScore }) => {
  const [dice, setDice] = useState(1);
  const [rule, setRule] = useState(0);

  if (selectedNumber == null) {
    return false;
  }

  function getRandomDice(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  function rollDice() {
    const randomNumber = getRandomDice(1, 7);
    setDice(randomNumber);
    if (selectedNumber == dice) {
      updateScore();
      Swal.fire({
        icon:"success",
        title: "Perfect Roll",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }else{
      updateWrongScore()
      Swal.fire({
        icon:"error",
        title: "Wrong Move !",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
        },
      });
    }
  }

  return (
    <>
      <div className="Dice-Roll">
        <img
          src={`../../../public/Assets/Images/dice_${dice}.png`}
          alt=""
          onClick={rollDice}
        />
        <button className="reset" onClick={resetScore}>
          Reset Score
        </button>
        {rule == 0 ? (
          <button className="show" onClick={() => setRule(true)}>
            {" "}
            Show Rule
          </button>
        ) : (
          <button className="show" onClick={() => setRule(false)}>
            {" "}
            Close Rule
          </button>
        )}
      </div>
      <p className="Dice-Roll">Click On Dice To Roll</p>

      {rule == true ? <DiceGameRule /> : <></>}
    </>
  );
};

export default DiceRole;
