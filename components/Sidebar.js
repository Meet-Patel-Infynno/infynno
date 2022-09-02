import React, { useEffect, useState } from "react";
import { RiSendPlaneLine } from "react-icons/ri";
import CheckBox from "./CheckBox";
import MultiSelectDropDown from "./MultiSelectDropDown";
import { BsChevronDown } from "react-icons/bs";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Listdown from "./Listdown";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCars,
  getCarTypes,
  getRadius,
  setbodyTypeData,
  setDriveTrainData,
  setExtColorData,
  setFeaturesData,
  setFuelTypeData,
  setIntColorData,
  setmodelData,
  setPrice,
  setTransmssionsData,
  setYear,
} from "../store/homePageSlice";
// import { Features } from "@headlessui/react/dist/utils/render";

const Sidebar = ({ Data }) => {
  const dispatch = useDispatch();

  const {
    price,
    year,
    extcolorData,
    intcolorData,
    transmissionsData,
    dtrainsData,
    fuelTypeData,
    featuresData,
    carTypes,
    radius,
    modelData,
    bodyTypeData,
  } = useSelector((state) => ({
    price: state.homePageSlice.price,
    year: state.homePageSlice.year,
    extcolorData: state.homePageSlice.extcolorData,
    intcolorData: state.homePageSlice.intcolorData,
    transmissionsData: state.homePageSlice.transmissionsData,
    dtrainsData: state.homePageSlice.dtrainsData,
    fuelTypeData: state.homePageSlice.fuelTypeData,
    featuresData: state.homePageSlice.featuresData,
    carTypes: state.homePageSlice.carTypes,
    radius: state.homePageSlice.radius,
    modelData: state.homePageSlice.modelData,
    bodyTypeData: state.homePageSlice.bodyTypeData,
  }));

  const [more, setmore] = useState(false);

  console.log(carTypes, "tpypes as");
  const ratingData = {
    "⭐⭐⭐⭐⭐ only": 5,
    "⭐⭐⭐⭐and above": 4,
    "⭐⭐⭐ and above": 3,
    "⭐⭐ and above ": 2,
    "⭐ and above": 1,
  };

  function getNewCars(cartype) {
    let array = !cartype.target.checked
      ? carTypes.filter((t) => t !== cartype.target.value)
      : [...carTypes, cartype.target.value];

    dispatch(getCarTypes(array));
    dispatch(fetchCars());
  }

  return (
    <>
      <section className="sidebar w-[312px] pb-10 h-auto bg-[#FFFFFF] px-4">
        <div className="filtermain flex flex-col gap-6">
          <div className="filter flex flex-col gap-2 pt-4">
            <div className="stitle font-bold text-base leading-6 text-[#28293D]">
              Filter by
            </div>
            <span className="w-[30px] h-[2px] rounded-[10px] card-btn"></span>
          </div>
          <div className="cartpe flex flex-col gap-[14px]">
            <div className="stitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
              Car type
            </div>
            <div className="check flex gap-[26px]">
              <div className="new flex gap-[10px] justify-start items-center">
                <input
                  type="checkbox"
                  value={"New Car"}
                  checked={carTypes.includes("New Car")}
                  // checked={true}
                  // onChange={(newcar) => getNewCars(newcar)}
                  onChange={getNewCars}
                  className="w-5 h-5 accent-[#28293D] bg-white rounded border-[2px] border-solid border-[#8F90A6]"
                  id="new"
                />
                <label
                  htmlFor="new"
                  className="font-medium text-sm leading-5 text-[#28293D]"
                >
                  New
                </label>
              </div>
              <div className="used flex gap-[10px] justify-start items-center">
                <input
                  type="checkbox"
                  checked={carTypes.includes("Used Car")}
                  value={"Used Car"}
                  onChange={getNewCars}
                  // onChange={(usedcar) => getNewCars(usedcar)}
                  className="w-5 h-5 accent-[#28293D] bg-white rounded border-[2px] border-solid border-[#8F90A6]"
                  id="used"
                />
                <label
                  htmlFor="used"
                  className="font-medium text-sm leading-5 text-[#28293D]"
                >
                  Used
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="line w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
        <div className="zip flex flex-col gap-5">
          <div className="ztitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
            Your ZIP
          </div>
          <div className="flex justify-center items-center zsearch w-[280px] h-[48px] px-4 py-[14px] bg-white border border-solid border-[#E4E4EB] outline-none rounded-[10px]">
            <input
              type="search"
              className=" w-[280px] h-[45px] bg-white outline-none rounded-[10px]"
            />
            <RiSendPlaneLine size={20} fill="#FF6B00"></RiSendPlaneLine>
          </div>
          <div className="zsearchwithin flex flex-col gap-3">
            <div className="bartitle flex justify-between items-center">
              <div className="bltitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                Search within
              </div>
              <div className="brtitle font-semibold text-base leading-6  text-[#28293D]">
                {radius} miles
              </div>
            </div>
            <div className="bar">
              <Slider
                defaultValue={100}
                min={20}
                max={500}
                onAfterChange={() => dispatch(fetchCars())}
                onChange={(value) => dispatch(getRadius(value))}
              ></Slider>
            </div>
            <div className="barbottomtitle flex justify-between items-center">
              <div className="bbltitle font-medium text-xs leading-4 text-[#28293D]">
                20 miles
              </div>
              <div className="bbrtitle font-medium text-xs leading-4 text-[#28293D]">
                500 miles
              </div>
            </div>
          </div>
        </div>
        <div className="line w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
        <div className="make">
          <div className="makemain flex flex-col gap-4">
            <div className="mtop flex flex-col gap-2">
              <div className="mttitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                Make
              </div>
              <div className="mdropdown">
                {/* <Dropdown></Dropdown> */}
                <MultiSelectDropDown makes={Data.makes}></MultiSelectDropDown>
              </div>
            </div>
            <div className="model flex flex-col gap-[14px]">
              <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
                Model
              </div>
              <div
                className={`checkboxes overflow-hidden flex flex-col gap-[16px] ${
                  more ? "h-auto" : "h-[165px]"
                }`}
              >
                {Data.models &&
                  Object.entries(Data.models).map(([key, value]) => {
                    return (
                      <>
                        <CheckBox
                          name={key}
                          state={modelData}
                          stateFunction={setmodelData}
                          value={value}
                        ></CheckBox>
                      </>
                    );
                  })}
              </div>
            </div>
            <div
              className="showmore cursor-pointer flex justify-start items-center gap-[5px]"
              onClick={() => (more ? setmore(false) : setmore(true))}
            >
              <div
                className={`font-medium text-sm leading-5 text-[#FF8800] ${
                  more ? "hidden" : ""
                }`}
              >
                Show more
              </div>
              <div>
                <BsChevronDown
                  fill="#FF8800"
                  className="w-[10px] h-[10px]"
                ></BsChevronDown>
              </div>
            </div>
          </div>
        </div>
        <div className="line w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
        {/* <RangeComponent /> */}
        <div className="bodytype flex flex-col gap-[14px]">
          <div className="bdttle">
            <div className="font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
              Body Type
            </div>
          </div>
          <div className="bdcheckbox flex flex-col gap-4 justify-center items-start">
            {Data.bodyType &&
              Object.entries(Data.bodyType).map(([key, value]) => {
                return (
                  <>
                    <CheckBox
                      name={key}
                      value={value}
                      state={bodyTypeData}
                      stateFunction={setbodyTypeData}
                    />
                  </>
                );
              })}
          </div>
        </div>
        <div className="line w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
        <div className="Price flex flex-col gap-3">
          <div className="bartitle flex justify-between items-center">
            <div className="bltitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
              Price
            </div>
            <div className="brtitle font-semibold text-base leading-6  text-[#28293D]">
              $ {price[0]} - ${price[1]}
            </div>
          </div>
          <div className="bar">
            <Slider
              defaultValue={[0, 100000]}
              min={0}
              max={100000}
              onAfterChange={() => dispatch(fetchCars())}
              onChange={(value) => dispatch(setPrice(value))}
              range
            ></Slider>
          </div>
          <div className="barbottomtitle flex justify-between items-center">
            <div className="bbltitle font-medium text-xs leading-4 text-[#28293D]">
              $0
            </div>
            <div className="bbrtitle font-medium text-xs leading-4 text-[#28293D]">
              $100,000
            </div>
          </div>
        </div>
        <div className="line w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
        <div className="makeyear flex flex-col gap-3">
          <div className="bartitle flex justify-between items-center">
            <div className="bltitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
              Make year
            </div>
            <div className="brtitle font-semibold text-base leading-6  text-[#28293D]">
              {year[0]} - {year[1]}
            </div>
          </div>
          <div className="bar">
            <Slider
              defaultValue={[1990, 2022]}
              min={1990}
              max={2022}
              onAfterChange={() => dispatch(fetchCars())}
              onChange={(value) => dispatch(setYear(value))}
              range
            ></Slider>
          </div>
          <div className="barbottomtitle flex justify-between items-center">
            <div className="bbltitle font-medium text-xs leading-4 text-[#28293D]">
              1990
            </div>
            <div className="bbrtitle font-medium text-xs leading-4 text-[#28293D]">
              2021
            </div>
          </div>
        </div>
        <div className="line w-[280px] h-[1px] bg-[#E4E4EB] rounded-[10px] my-[16px]"></div>
        <div className="mileage flex flex-col gap-3">
          <div className="bartitle flex justify-between items-center">
            <div className="bltitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
              Mileage
            </div>
            <div className="brtitle font-semibold text-base leading-6  text-[#28293D]">
              Any
            </div>
          </div>
          <div className="bar">
            <Slider></Slider>
          </div>
          <div className="barbottomtitle flex justify-between items-center">
            <div className="bbltitle font-medium text-xs leading-4 text-[#28293D]">
              0
            </div>
            <div className="bbrtitle font-medium text-xs leading-4 text-[#28293D]">
              Any
            </div>
          </div>
        </div>
        <div className="line w-[312px] ml-[-16px] h-[1px] bg-[#E4E4EB] rounded-[10px] mt-[16px]"></div>
        <div className="flex flex-col gap-3">
          <Listdown
            title={"Styles"}
            smt1={"EXTERIOR COLOR"}
            smtData1={Data.extColors}
            state1={extcolorData}
            stateFunction1={setExtColorData}
            smt2={"INTERIOR COLOR"}
            smtData2={Data.intColors}
            state2={intcolorData}
            stateFunction2={setIntColorData}
          ></Listdown>
          <Listdown
            title={"Performance"}
            smt1={"TRANSMISSION"}
            smtData1={Data.transmissions}
            state1={transmissionsData}
            stateFunction1={setTransmssionsData}
            smt2={"DRIVE TRAIN"}
            smtData2={Data.dtrains}
            state2={dtrainsData}
            stateFunction2={setDriveTrainData}
            smt3={"FUEL TYPE"}
            smtData3={Data.fuelType}
            state3={fuelTypeData}
            stateFunction3={setFuelTypeData}
          ></Listdown>
          {Data.features && (
            <Listdown
              title={"Features"}
              smt1={
                Data.features &&
                Object.entries(Data.features)[0] &&
                Object.entries(Data.features)[0][0]
              }
              smtData1={
                Data.features &&
                Object.entries(Data.features)[0] &&
                Object.entries(Data.features)[0][1]
              }
              state1={featuresData}
              stateFunction1={setFeaturesData}
              smt2={
                Object.entries(Data.features)[1] &&
                Object.entries(Data.features)[1][0]
              }
              smtData2={
                Object.entries(Data.features)[1] &&
                Object.entries(Data.features)[1][1]
              }
              state2={featuresData}
              stateFunction2={setFeaturesData}
              smt3={
                Object.entries(Data.features)[2] &&
                Object.entries(Data.features)[2][0]
              }
              smtData3={
                Object.entries(Data.features)[2] &&
                Object.entries(Data.features)[2][1]
              }
              state3={featuresData}
              stateFunction3={setFeaturesData}
              smt4={
                Object.entries(Data.features)[3] &&
                Object.entries(Data.features)[3][0]
              }
              smtData4={
                Object.entries(Data.features)[3] &&
                Object.entries(Data.features)[3][1]
              }
              state4={featuresData}
              stateFunction4={setFeaturesData}
              smt5={
                Object.entries(Data.features)[4] &&
                Object.entries(Data.features)[4][0]
              }
              smtData5={
                Object.entries(Data.features)[4] &&
                Object.entries(Data.features)[4][1]
              }
              state5={featuresData}
              stateFunction5={setFeaturesData}
            ></Listdown>
          )}
          <Listdown
            title={"Rating"}
            state1={null}
            stateFunction1={null}
            smtData1={ratingData}
          ></Listdown>
          <Listdown title={"Contactless service"}></Listdown>
        </div>
      </section>
    </>
  );
};

export default Sidebar;
