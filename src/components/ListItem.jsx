import React, { useState } from "react";
function ListItem(props) {
  var textStyle = { textDecoration: "none" };
  const [strike, setStrike] = useState(textStyle);

  function strikeOut() {
    console.log("Hi");
    textStyle = textStyle.textDecoration === "none" ? "strikeThrough" : "none";
    console.log(textStyle.textDecoration);
  }

  return (
    <li style={strike} onClick={strikeOut}>
      {props.item}
    </li>
  );
}

export default ListItem;
