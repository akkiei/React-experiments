import React from "react";
import { AppContext } from "./Context";
import ChildOneOne from "./ChildOneOne";
const ChildOne = () => {
  return (
    <div>
      ChildOne
      <ChildOneOne />
    </div>
  );
};

export default ChildOne;
