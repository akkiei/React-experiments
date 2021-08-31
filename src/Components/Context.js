import React from "react";

export const AppContext = React.createContext();

const { Provider } = AppContext;

export const AppProvider = (props) => {
  const message = "default value";
  return <Provider value={props.message || message}>{props.children}</Provider>;
};
