import React from "react";
import classNames from "classnames";

const Button = ({
  className,
  onClick,
  type,
  textColor,
  bgColor,
  children,
  ...props
}) => {
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={classNames(
          className,
          bgColor ? bgColor : "bg-orange-500",
          "rounded-md font-medium text-base leading-6 tracking-wide w-full flex justify-center items-center",
          textColor ? textColor : "text-white"
        )}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
