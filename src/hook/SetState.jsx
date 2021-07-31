import React, { useState } from "react";

// const handleClick = () => {
//     setCount(count+1)
// }
export function SetState() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
// export default SetState;
