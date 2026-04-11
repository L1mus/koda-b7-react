import React from "react";

const Input = ({ nameInput, typeInput, error, ...props }) => {
  return (
    <>
      <div className="focus:outline-cyan-500 focus:outline-1 bg-white w-full px-2 border-2 h-13 p-2 ">
        <input
          className="text-blue-600 h-8 w-full focus:outline-none "
          id={nameInput}
          name={nameInput}
          type={typeInput}
          {...props}
        />
      </div>
      {error && <span className="text-red-600">{error}</span>}
    </>
  );
};

export default Input;
