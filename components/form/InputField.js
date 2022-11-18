import React, { useState } from "react";
import classNames from "classnames";
import { useField, useFormikContext } from "formik";
import { EyeFalse, EyeTrue } from "../icons";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const InputField = ({
  className,
  labelClassName,
  type,
  startIcon,
  endIcon,
  label,
  ...props
}) => {
  const { setFieldValue } = useFormikContext();
  const [eye, setEye] = useState(false);
  const [field, meta] = useField(props);
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.id || props.name}
          className={classNames(labelClassName, "mt-6")}
        >
          {label}
        </label>
      )}

      <div className="flex justify-start items-center relative">
        {startIcon && <div className="absolute left-7">{startIcon}</div>}
        {type && (type === "date" || type === "time") ? (
          <DatePicker
            className={classNames(
              className,
              "w-full py-3 rounded-md flex justify-start items-center border border-gray-300",
              startIcon ? "px-16" : "px-6",
              meta.touched && meta.error && "border border-red-500"
            )}
            {...field}
            {...props}
            selected={field?.value ? field.value : null}
            onChange={(val) => {
              setFieldValue(field.name, val);
            }}
          />
        ) : (
          <input
            type={type === "password" ? (eye ? "text" : type) : type}
            className={classNames(
              className,
              "w-full py-3 rounded-md flex justify-start items-center border border-gray-300",
              startIcon ? "px-16" : "px-6",

              meta.touched && meta.error && "border border-red-500"
            )}
            {...field}
            {...props}
          />
        )}
        {type === "password" ? (
          <div className="absolute right-7" onClick={() => setEye(!eye)}>
            {eye ? (
              <EyeTrue wrapperClass="w-4 h-4" />
            ) : (
              <EyeFalse wrapperClass="w-4 h-4" />
            )}
          </div>
        ) : (
          endIcon && <div className="absolute right-7">{endIcon}</div>
        )}
      </div>
      {meta.touched && meta.error ? (
        <div className="error text-red-500">{meta.error}</div>
      ) : null}
    </div>
  );
};

export default InputField;
