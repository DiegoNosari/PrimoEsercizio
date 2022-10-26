import Board from "./Board";

function Game() {
  const [history,setHistory]=useState();
  function clickHandler ()
  {
    console.log(valore);
  }
  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={clickHandler}/>
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;
