import { useState } from "react";

function Square(props) {
  //const [valore,setValore]=useState(props.value);
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
