import React from "react";

function ChildButton({ onClick }) {
  console.log("render ChildButton");
  return <button onClick={onClick}>Кликни меня</button>;
}

export default React.memo(ChildButton);
