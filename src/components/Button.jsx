 import React from "react";
function Button({countBtn}) {
  console.log('render button');
  
  return (
    <button onClick={countBtn}>increment ++</button>
  )
}
export default React.memo(Button)

 