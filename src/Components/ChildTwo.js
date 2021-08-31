import React, { useContext } from "react";
import { AppContext } from "./Context";
const ChildTwo = () => {
  const conData = useContext(AppContext);
  console.log(conData);
  return <div>CHild TWO {conData}</div>;
};

export default ChildTwo;
