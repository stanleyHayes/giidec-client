import React from "react";
import GHeader from "../navigation/GHeader";


function Layout(props) {
    return (
       <div>
           <div>
               <GHeader/>
           </div>
           <div>
               {props.children}
           </div>
           <div>

           </div>
       </div>
    )
}

export default Layout;
