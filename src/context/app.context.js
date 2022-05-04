import React, { createContext, useReducer } from "react";
import mergeStateReducer from "../utils/mergeStateReducer";

export const AppContext = createContext();

const initialState = {};

export const AppContextProvider = ({ children }) => {
  const [context, setContext] = useReducer(mergeStateReducer, initialState);
  return (
    <AppContext.Provider value={{ context, setContext }}>
      {children}
    </AppContext.Provider>
  );
};
