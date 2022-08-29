import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  SelectorIcon,
} from "@heroicons/react/solid";

const people = [
  { name: "Wade Cooper" },
  { name: "Arlene Mccoy" },
  { name: "Devon Webb" },
  { name: "Tom Cook" },
  { name: "Tanya Fox" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
  { name: "Hellen Schmidt" },
];

const Dropdown = () => {
  const [selected, setSelected] = useState(people[0]);
  const [rotated, setRotate] = useState(false);
  function rotate() {
    if (rotated) {
      setRotate(false);
    } else {
      setRotate(true);
    }
  }
  return (
    <div className="">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button
            onClick={() => rotate()}
            className="relative w-[280px] h-[48px] cursor-default rounded-[10px] bg-white py-2 pl-3 pr-10 text-left border border-solid border-[#E4E4EB] hover:border-[#FF8800] focus:border-[#E63535] sm:text-sm"
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className={`h-5 transition-all duration-500 w-5 text-gray-400 ${
                  rotated ? "rotate-180" : ""
                }`}
                onClick={() => rotate()}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {people.map((person, personIdx) => (
                <Listbox.Option
                  key={personIdx}
                  className={({ active }) =>
                    `relative cursor-default hover:bg-[#FAFAFC] select-none  ${
                      active ? "bg-[#FFF3EB]" : ""
                    }`
                  }
                  value={person}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block py-2 pl-10 pr-4 truncate ${
                          selected ? "font-medium bg-[#FFF3EB]" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {/* {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null} */}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default Dropdown;
