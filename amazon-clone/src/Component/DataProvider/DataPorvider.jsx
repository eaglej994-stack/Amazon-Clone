

import React,{createContext, useContext, useReducer} from "react";
import { initialState, reducer } from "../../Utility/reducer";

export const DataContext=createContext()

const DataProvider=({children,reducer,initialState})=>{
    return(
        <DataContext.Provider value={useReducer(reducer,initialState)}>
            {children}

        </DataContext.Provider>
    )
}

export const useDataLayes=()=>useContext(DataContext);
export default DataProvider