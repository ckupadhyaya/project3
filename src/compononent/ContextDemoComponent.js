import React from "react"
import { useContext } from "react";


let userDetailsContext=React.createContext(null);
export function ContextDemoComponent(){
    return(
        <div className="container-fluid">
           <userDetailsContext.Provider value={{UserName:'john'}}>
              <h1>Index Component</h1>
               <SectionComponent/>
           </userDetailsContext.Provider>
        </div>
    )
}

export function SectionComponent(){
    const userDetails=useContext(userDetailsContext);
    return(
        <div>
            <h2>Section Component-{userDetails.UserName}</h2>
            <MainComponent/>
        </div>
    )
}

export function MainComponent(){
    const userDetails=useContext(userDetailsContext);
    return(
        <div>
            <h2>Main component-{userDetails.UserName}</h2>
        </div>
    )
}