import './DiceGameRule.css'
const DiceGameRule = () => {
  return (
    <div className="game-rule-container">
      <h2>HOW TO PLAY DICE ROLL GAME</h2>
      <p>Select any number</p>
      <p>Click on dice image to roll</p>
      <p>
        After click on dice if selected number is equal to dice number you will
        get same point as dice
      </p>
      <p>if you get wrong guess then 1 point will be dedcuted from your score</p>
    </div>
  );
};

export default DiceGameRule;
