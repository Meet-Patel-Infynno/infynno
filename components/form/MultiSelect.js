import React from "react";
import { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import Button from "./Button";
import { useField } from "formik";
import classNames from "classnames";

const people = [
  "Wade Cooper",
  "Arlene Mccoy",
  "Devon Webb",
  "Tom Cook",
  "Tanya Fox",
  "Hellen Schmidt",
  "Caroline Schultz",
  "Mason Heaney",
  "Claudie Smitham",
  "Emil Schaefer",
];

const MultiSelect = ({
  optionClassName,
  optionsClassName,
  boxClassName,
  endIcon,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [selectedServces, setSelectedServices] = useState([]);
  const [field, meta] = useField(props.name);

  function isSelected(value) {
    return selectedPersons.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedPersonsUpdated = [
        ...selectedPersons,
        people.find((el) => el === value),
      ];
      setSelectedPersons(selectedPersonsUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = selectedPersons.filter((el) => el !== value);
    setSelectedPersons(selectedPersonsUpdated);
    setIsOpen(true);
  }

  const handleSetSelecteServices = () => {
    setSelectedServices(selectedPersons);
    props.handleApply(selectedPersons);
    setIsOpen(false);
  };

  return (
    <div className="w-full">
      <div className="">
        <Listbox
          as="div"
          value={field.value}
          onChange={(value) => handleSelect(value)}
        >
          {() => (
            <>
              <div className="relative">
                <span className="rounded-md">
                  <Listbox.Button
                    onClick={() => setIsOpen(!isOpen)}
                    open={isOpen}
                    className={classNames(
                      boxClassName
                        ? boxClassName
                        : "w-full truncate flex justify-start px-6 font-medium text-gray-900 rounded-md",
                      meta.touched && meta.error && "border border-red-500",
                      " border border-gray-800 bg-transparent py-3"
                    )}
                  >
                    <span
                      className={`block truncate pr-6 ${
                        selectedServces.length < 1
                          ? "text-gray-900"
                          : "text-black "
                      }`}
                    >
                      {selectedServces.length < 1
                        ? "Choose services"
                        : selectedServces.join(",")}
                    </span>

                    {endIcon && (
                      <span className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                        {endIcon}
                      </span>
                    )}
                  </Listbox.Button>
                </span>

                <Transition
                  unmount={false}
                  show={isOpen}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                >
                  <Listbox.Options
                    className={classNames(
                      optionsClassName
                        ? optionsClassName
                        : "max-h-60 font-josefin rounded-md text-xl leading-5 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                    )}
                  >
                    {people.map((person) => {
                      const selected = isSelected(person);
                      return (
                        <Listbox.Option
                          className={classNames(
                            optionClassName
                              ? optionClassName
                              : "max-h-52 text-xl"
                          )}
                          key={person}
                          value={person}
                        >
                          {({ active }) => (
                            <div
                              className={`${
                                active ? "text-white bg-blue-600" : "text-black"
                              } flex hover:bg-orange-400 items-center hover:text-white gap-3 cursor-default select-none relative py-2 pl-8 pr-4`}
                            >
                              <input
                                id={person}
                                type="checkbox"
                                className={`${
                                  selected ? "font-semibold" : "font-normal"
                                } block truncate rounded-sm w-4 h-4 border-gray-100 text-orange-500`}
                                value={person}
                                checked={selected}
                                onChange={(e) => handleSelect(e.target.value)}
                              />
                              {person}
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                  <div className=" w-full justify-center items-center py-6">
                    <Button
                      type="button"
                      bgColor="bg-white"
                      className="border w-auto font-normal font-josefin text-sm border-gray-400 px-5 py-2 mx-auto"
                      textColor="text-black-600"
                      onClick={handleSetSelecteServices}
                    >
                      Apply
                    </Button>
                  </div>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
        {meta.touched && meta.error ? (
          <div className="error text-red-500">{meta.error}</div>
        ) : null}
      </div>
    </div>
  );
};

export default MultiSelect;
