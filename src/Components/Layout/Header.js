import React from 'react';
import NavItem from './NavItem';

const Header = () => {
    return(
        <div className="w-full text-white py-4 flex flex-row place-content-center bg-blue-800">
            <div className="flex flex-col w-1/3">
                <h1 className="text-2xl text-blue-300 leading-tight">
                Slacker News
                </h1>
                <p className="text-base text-gray-100 leading-normal">
                Bringing some news, I guess?
                </p>
            </div>
        <div className="flex flex-row w-1/2 justify-end">
            <NavItem text="New" />
            <NavItem text="Past" />
            <NavItem text="Comments" />
            <NavItem text="Ask" />
            <NavItem text="Show" />
            <NavItem text="Jobs" />
            <NavItem text="Submit" />
            
            <div className="bg-blue-400 ml-4 hover:bg-blue-700 text-center rounded-md shadow-xl flex items-center">
                <NavItem text="Login" />
            </div>
        </div>
       
      </div>
    )
}

export default Header;