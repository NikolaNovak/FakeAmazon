import React from "react";
import { createContext, useContext, useReducer } from "react";

import reducer, { initialState } from "./reducer";

export const StateContext = createContext();

const StateProvider = ({ children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);

export default StateProvider;
