import React from "react"; 

function CountTwo({ count }) {
  console.log('CountTwo rendered');
  return <h2>{count}</h2>;
}

export default React.memo(CountTwo);

 