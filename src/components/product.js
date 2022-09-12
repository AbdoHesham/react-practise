import { useState } from "react";
import Avatar from "./avatar";

function Product(props) {
  let [counter, setCounter] = useState(0);

  return (
    <div className="Comment">
      <div className="UserInfo">
        <Avatar user={props.author} />
        <div className="UserInfo-name">{props.author.name}</div>
      </div>
      <div className="Comment-text">{props.text}</div>
      <div className="Comment-date">{Date.now(props.date)}</div>
      <h6> {console.log(counter)} </h6>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Product;
