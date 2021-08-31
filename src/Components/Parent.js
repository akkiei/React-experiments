import React from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import { AppProvider } from "./Context";
const Parent = () => {
  return (
    <AppProvider message="SECRET">
      <div>parent</div>
      <ChildOne />
      <ChildTwo />
    </AppProvider>
  );
};

export default Parent;
