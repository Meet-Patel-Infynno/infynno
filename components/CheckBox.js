import React from "react";

const CheckBox = (props) => {
  return (
    <div className="new flex gap-[10px] justify-start items-center">
      <input
        type="checkbox"
        className="w-5 h-5 accent-[#28293D] bg-white rounded border-[2px] border-solid border-[#8F90A6]"
        id="new"
      />
      <label
        htmlFor="new"
        className="font-medium text-sm leading-5 text-[#28293D]"
      >
        {props?.name} {props.value ? `(${props.value})`:""}
      </label>
    </div>
  );
};

export default CheckBox;
