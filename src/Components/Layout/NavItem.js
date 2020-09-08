import React from 'react';

const NavItem =(props)=>{
    return(
        <div className="px-2 py-4 mx-2">
           <p>{props.text}</p>
        </div>
    )
}
export default NavItem;