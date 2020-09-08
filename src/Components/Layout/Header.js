import React from 'react';
import NavItem from './NavItem';
import BlueButton from './BlueButton';

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
            <BlueButton text="Login" />
        </div>
       
      </div>
    )
}

export default Header;