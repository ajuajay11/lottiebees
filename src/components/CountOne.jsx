 
import React from "react";
function CountOne({count}) {
  console.log('render CountOne');

  return (
    <h2>{count}</h2>
  )
}

 export default React.memo(CountOne)