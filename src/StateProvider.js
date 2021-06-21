import React from "react";

export const StateContext = React.createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
  const value = React.useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext = () => React.useContext(StateContext);
