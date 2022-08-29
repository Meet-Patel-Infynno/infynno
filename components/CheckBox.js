import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars, getPaginate, setmodelData } from "../store/homePageSlice";

const CheckBox = ({name , value , state , stateFunction}) => {
  // const {modelData} = useSelector((state)=>state.homePageSlice)
  const dispatch = useDispatch()
  function getValue(modelType){
    let array = !modelType.target.checked
      ? state.filter((t) => t !== modelType.target.value)
      : [...state, modelType.target.value];
      dispatch(stateFunction([]));
      dispatch(stateFunction(array));
      dispatch(getPaginate(1));
      dispatch(fetchCars());
  }
  return (
    <div className="new flex gap-[10px] justify-start items-center">
      <input
        checked={ state === null? "":state.includes(name)}
        onChange={getValue}
        value={name}
        type="checkbox"
        className="w-5 h-5 accent-[#28293D] bg-white rounded border-[2px] border-solid border-[#8F90A6]"
        id="new"
      />
      <label
        
        htmlFor="new"
        className="font-medium text-sm leading-5 text-[#28293D]"
      >
        {name} {value ? `(${value})`:""}
      </label>
    </div>
  );
};

export default CheckBox;
