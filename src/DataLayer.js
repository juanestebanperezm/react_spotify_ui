import React,{createContext,
    useReducer,
    useContext} from "react";

export const DataLayerContetxt=createContext()

export const DataLayer=(({initialState,reducer,children})=>(
    <DataLayerContetxt.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContetxt.Provider>
));

export const useDataLayerValue=()=>useContext(DataLayerContetxt)

