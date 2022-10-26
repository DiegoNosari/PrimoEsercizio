import { useState } from "react";

function Square(props) {
  const [valore, cambiaValore] = useState("");
  const [xIsNext, xIN] = useState(false);
  const handleClick = () => {
    if (xIsNext) {
      cambiaValore("X");
      xIN(false);
    } else {
      cambiaValore("O");
      xIN(true);
    }
  };
  return (
    <button className="square" onClick={handleClick}>
      {valore}
    </button>
  );
}

export default Square;
