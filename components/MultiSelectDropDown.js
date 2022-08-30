import React, { useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import homePageSlice, {
  fetchCars,
  getPaginate,
  setMakeCars,
  setmodelData,
} from "../store/homePageSlice";
import { useSelector, useDispatch } from "react-redux";

const MultiSelectDropDown = ({ makes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPersons, setSelectedPersons] = useState([]);
  const [rotated, setRotate] = useState(false);
  const { makeCars } = useSelector((state) => state.homePageSlice);
  const dispatch = useDispatch();
  const people = Object.keys(makes);

  function rotate() {
    if (rotated) {
      setRotate(false);
    } else {
      setRotate(true);
    }
  }

  function isSelected(value) {
    return makeCars.find((el) => el === value) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedPersonsUpdated = [
        ...makeCars,
        people.find((el) => el === value),
      ];
      dispatch(setMakeCars(selectedPersonsUpdated));
      dispatch(setmodelData([]));
      dispatch(getPaginate(1));
      dispatch(fetchCars());
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedPersonsUpdated = makeCars.filter((el) => el !== value);
    dispatch(setMakeCars(selectedPersonsUpdated));
    dispatch(setmodelData([]));
    dispatch(getPaginate(1));
    dispatch(fetchCars());
    setIsOpen(true);
  }
  return (
    <div className="">
      <div className="w-full max-w-xs mx-auto">
        <Listbox
          as="div"
          className="space-y-1"
          value={makeCars}
          onChange={(value) => handleSelect(value)}
          open={isOpen}
        >
          {() => (
            <>
              {/* <Listbox.Label className="block text-sm leading-5 font-medium text-gray-700">
                Assigned to
              </Listbox.Label> */}
              <div className="relative">
                <span className="inline-block w-full rounded-md shadow-sm">
                  <Listbox.Button
                    className="relative w-[280px] h-[48px] cursor-default rounded-[10px] bg-white py-2 pl-3 pr-10 text-left border border-solid border-[#E4E4EB] hover:border-[#FF8800] focus:border-[#E63535] sm:text-sm"
                    onClick={() => setIsOpen(!isOpen)}
                    open={isOpen}
                  >
                    <span className="block truncate">
                      {makeCars.length < 1 ? "Select Make" : `${makeCars}`}
                    </span>
                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                      <ChevronDownIcon
                        className={`h-5 transition-all duration-500 w-5 text-gray-400 ${
                          rotated ? "rotate-180" : ""
                        }`}
                        onClick={() => rotate()}
                        aria-hidden="true"
                      />
                    </span>
                  </Listbox.Button>
                </span>

                <Transition
                  unmount={false}
                  show={isOpen}
                  enter="transition duration-300 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-300 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <div
                    className={`${
                      isOpen
                        ? "w-[1520px] h-[150vh] bg-transparent absolute left-[-80px] top-[-425px]"
                        : ""
                    } `}
                    onClick={() => {
                      setIsOpen(!isOpen);
                    }}
                  ></div>
                  <Listbox.Options
                    onClick={() => setIsOpen(false)}
                    static
                    className="absolute top-[-280px] mt-1 h-[90vh] w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    {people.map((person) => {
                      const selected = isSelected(person);
                      return (
                        <Listbox.Option key={person} value={person}>
                          {({ active }) => (
                            <div
                              className={`hover:bg-[#FAFAFC] ${
                                active ? "bg-[#FFF3EB]" : ""
                              } cursor-default select-none relative `}
                            >
                              <span
                                className={`block py-2 pl-10 pr-4 truncate${
                                  selected
                                    ? "font-semibold bg-[#FFF3EB]"
                                    : "font-normal"
                                } block truncate`}
                              >
                                {person}
                              </span>
                              {selected && (
                                <span
                                  className={`${
                                    active ? "text-white" : "text-blue-600"
                                  } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                ></span>
                              )}
                            </div>
                          )}
                        </Listbox.Option>
                      );
                    })}
                  </Listbox.Options>
                </Transition>
                {/* <div className="pt-1 text-sm">
                  {selectedPersons.length > 0 && (
                    <>Selected persons: {selectedPersons.join(", ")}</>
                  )}
                </div> */}
              </div>
            </>
          )}
        </Listbox>
      </div>
    </div>
  );
};

export default MultiSelectDropDown;
