import Square from "./Square";

function Board(props) {
  return (
    <div>
      <div className="status">{/*status*/}</div>
      <div className="board-row">
        <Square value={0} onClick={() => {}} />
        <Square value={1} onClick={() => {}} />
        <Square value={2} onClick={() => {}} />
      </div>
      <div className="board-row">
        <Square value={3} onClick={() => {}} />
        <Square value={4} onClick={() => {}} />
        <Square value={5} onClick={() => {}} />
      </div>
      <div className="board-row">
        <Square value={6} onClick={() => {}} />
        <Square value={7} onClick={() => {}} />
        <Square value={8} onClick={() => {}} />
      </div>
    </div>
  );
}

export default Board;
