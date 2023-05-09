import React,{createContext,useContext, useReducer} from 'react';
// Prepares the dataLayer
export const StateContext = createContext();
// Wrap our app and provide the provider
export const StateProvider = ({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>

);
// This is how we use it inside of a component
export const useStateValue = ()=> useContext(StateContext);