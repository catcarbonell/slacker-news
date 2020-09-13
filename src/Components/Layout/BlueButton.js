import React from "react";

const BlueButton = (props) => {
  return (
    <div className="flex items-center self-center px-4 py-2 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg">
      <p>{props.text}</p>
    </div>
  );
};
export default BlueButton;
