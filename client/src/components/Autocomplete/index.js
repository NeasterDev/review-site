import React from "react";
import { useState } from "react";
import { Hint } from "react-autocomplete-hint";

const AutoComplete = ({ suggestions }) => {
  const [text, setText] = useState("");

  return (
    <>
      <Hint options={suggestions}>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </Hint>
    </>
  );
};
export default AutoComplete;
