import React from 'react';
import NavItem from './NavItem';

const Header = () => {
    return(
        <div className="w-5/6 mx-auto flex flex-row border-solid border-2 border-blue-800">
            <div className="flex flex-col justify-start border-solid border-2 border-blue-200">
                <h1 className="text-2xl text-blue-700 leading-tight">
                Slacker News
                </h1>
                <p className="text-base text-gray-700 leading-normal">
                Bringing some news, I guess?
                </p>
            </div>
        <div className="flex flex-row justify-end border-solid border-2 border-blue-300">
            <NavItem text="New" />
            <NavItem text="Past" />
            <NavItem text="Comments" />
            <NavItem text="Ask" />
            <NavItem text="Show" />
            <NavItem text="Jobs" />
            <NavItem text="Submit" />
        </div>
      </div>
    )
}

export default Header;