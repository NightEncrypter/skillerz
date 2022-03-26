import React from "react";

const CustomInput = ({ label }: { label: string }) => {
  return (
    <div className="relative">
      <input required type="text" className=" custom-input" />
      <label htmlFor="" className="custom-label ">
        {label}
      </label>
    </div>
  );
};

export default CustomInput;
