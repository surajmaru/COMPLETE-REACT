import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
  const [changeText, setChangeText] = useState(false);
  function changeTextHandler() {
    setChangeText(true);
  }
  return (
    <div>
      <h2>Hello</h2>
      {!changeText && <Output>Hi i am suraj</Output>}
      {changeText && <Output>Changed!</Output>}
      <button onClick={changeTextHandler}>Change text</button>
    </div>
  );
};

export default Greeting;
