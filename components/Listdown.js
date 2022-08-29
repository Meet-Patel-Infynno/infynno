import React from "react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";
import CheckBox from "./CheckBox";

const Listdown = ({
  title,
  smt1,
  smtData1,
  smt2,
  smtData2,
  smt3,
  smtData3,
  smt4,
  smtData4,
  smt5,
  smtData5,
  state1 ,
  state2 ,
  state3 ,
  state4 ,
  state5 ,
  stateFunction1,
  stateFunction2,
  stateFunction3,
  stateFunction4,
  stateFunction5,
}) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="border-y border-solid border-[#E4E4EB] ml-[-16px] flex w-[312px] h-[55px] justify-between items-center bg-[rgb(242,242,245)] px-4 py-2 text-left text-base leading-6 font-semibold text-[#28293D]">
            <span>{title}</span>
            <ChevronDownIcon
              className={`${
                open ? "rotate-180 transform" : ""
              } h-5 w-5 text-[#28293D]`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 flex flex-col gap-4">
            <div className="bodystyle flex flex-col gap-[14px]">
              <div className="bstitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                {smt1}
              </div>
              <div className="bscheckbox flex flex-col gap-3">
                {smtData1 &&
                  Object.entries(smtData1)?.map(([key, value]) => {
                    return (
                      <>
                        <CheckBox name={key} state={state1} stateFunction={stateFunction1}></CheckBox>
                      </>
                    );
                  })}
              </div>
            </div>
            {smtData2 &&
            <div className="bodystyle flex flex-col gap-[14px]">
              <div className="bstitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                {smt2}
              </div>
              <div className="bscheckbox flex flex-col gap-3">
                {smtData2 &&
                  Object.entries(smtData2).map(([key, value]) => {
                    return (
                      <>
                        <CheckBox name={key} state={state2} stateFunction={stateFunction2}></CheckBox>
                      </>
                    );
                  })}
              </div>
            </div>
            }
            {smtData3 &&
            <div className="bodystyle flex flex-col gap-[14px]">
              <div className="bstitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                {smt3}
              </div>
              <div className="bscheckbox flex flex-col gap-3">
                {smtData3 &&
                  Object.entries(smtData3).map(([key, value]) => {
                    return (
                      <>
                        <CheckBox name={key} state={state3} stateFunction={stateFunction3}></CheckBox>
                      </>
                    );
                  })}
              </div>
            </div>
            }
            {smtData4 &&
            <div className="bodystyle flex flex-col gap-[14px]">
              <div className="bstitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                {smt4}
              </div>
              <div className="bscheckbox flex flex-col gap-3">
                {smtData4 &&
                  Object.entries(smtData4).map(([key, value]) => {
                    return (
                      <>
                        <CheckBox name={key} state={state4} stateFunction={stateFunction4}></CheckBox>
                      </>
                    );
                  })}
              </div>
            </div>
                }
            {smtData5 &&
            <div className="bodystyle flex flex-col gap-[14px]">
              <div className="bstitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                {smt5}
              </div>
              <div className="bscheckbox flex flex-col gap-3">
                {smtData5 && 
                  Object.entries(smtData5).map(([key, value]) => {
                    return (
                      <>
                        <CheckBox name={key} state={state5} stateFunction={stateFunction5}></CheckBox>
                      </>
                    );
                  })}
              </div>
            </div>
                  }
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Listdown;
