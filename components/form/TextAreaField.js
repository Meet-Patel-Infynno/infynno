import React from "react";
import classNames from "classnames";
import { useField } from "formik";

const TextAreaField = ({
  className,
  type,
  startIcon,
  endIcon,
  label,
  ...props
}) => {
  const [field, meta] = useField(props);
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={props.id || props.name} className="mt-6">
          {label}
        </label>
      )}

      <div className="flex justify-start items-center relative">
        {startIcon && <div className="absolute left-7">{startIcon}</div>}

        <textarea
          type={type}
          className={classNames(
            className,
            "bg-transparent focus:outline-none font-medium text-base leading-4 tracking-wide w-full py-3 px-3 rounded-md flex justify-start items-center border border-gray-300",
            startIcon ? "px-16" : "px-6",

            meta.touched && meta.error && "border border-red-500"
          )}
          {...field}
          {...props}
        />

        {endIcon && <div className="absolute right-7">{endIcon}</div>}
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default TextAreaField;
