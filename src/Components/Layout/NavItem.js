import React from 'react';

const NavItem =(props)=>{
    return(
        <div className="flex items-center self-center px-2 mx-2 cursor-pointer hover:text-blue-300">
           <p>{props.text}</p>
        </div>
    )
}
export default NavItem;