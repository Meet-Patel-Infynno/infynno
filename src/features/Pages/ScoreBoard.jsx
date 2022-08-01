import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_base_url, api_include, api_key } from "../../config";
import ScoreCard from "./ScoreCard";
import { Bars } from "react-loader-spinner";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { cleanUp, scbFixture } from "./ScoreBoardSlice";

const ScoreBoard = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState("ScoreBoard");

  const {
    apiData,
    localScoreArr,
    visitorScoreArr,
    localBatting,
    visitorBatting,
    localextras,
    visitorextras,
    localbowling,
    visitorbowling,
    localnotbat,
    visitornotbat,
  } = useSelector((state) => state.ScoreBoardSlice);
  const { id } = useParams();
  console.log(localScoreArr, "localscorearrrr");
  console.log(localBatting, "battingg");
  console.log(localextras, "extrasss");
  console.log(localnotbat, "notbat");

  useEffect(() => {
    dispatch(scbFixture(id));
    // console.log("activ", active);
    return () => {
      dispatch(cleanUp());
    };
  }, [active]);

  return (
    <>
      {apiData.length === 0 ? (
        <div className="flex justify-center items-center h-[300px] w-[100%] mt-[100px]">
          <Bars
            height="80"
            width="80"
            color="rgb(255, 80, 0)"
            ariaLabel="bars-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      ) : (
        <section className="scoreboard flex flex-col justif-center items-center mt-24">
          <div className="scontent max-w-[672px] w-[1024px]">
            <div className="sheading flex justify-between items-center">
              <div className="leftscore flex flex-col justify-center items-center">
                <div className="stcode self-start rounded-sm px-[5px] py-[3px] bg-[#dbd09f]">
                  <p
                    className="text-[11px] leading-[1.27] tracking-[0
                3px] text-white"
                  >
                    {apiData.localteam?.code}
                  </p>
                </div>
                <div className="struns flex justify-start min-w-[150px] items-baseline">
                  <div className="srw">
                    <p className="font-semibold text-black text-[28px] leading-[42px] tracking-[0.14px]">
                      {localScoreArr?.score}/{localScoreArr?.wickets}
                    </p>
                  </div>
                  <div className="sover">
                    <p className="text-[12px] leading-[1.33] tracking-[0.4px] font-semibold text-[#787878] m-[5px]">
                      ({localScoreArr?.overs})
                    </p>
                  </div>
                </div>
              </div>
              <div className="svs relative flex justify-center items-center">
                <div className="h-[60px] w-[1px] bg-[#e6e7ec]"></div>
                <div className="w-6 h-6 leading-6 text-[15px] rounded-full absolute text-center text-[#99a0b3] bg-[#e6e7ec]">
                  V
                </div>
              </div>
              <div className="rightscore flex flex-col">
                <div className="stcode self-end rounded-sm px-[5px] py-[3px] bg-[#a7c2cc]">
                  <p
                    className="text-[11px] leading-[1.27] tracking-[0
                3px] text-white"
                  >
                    {apiData.visitorteam?.code}
                  </p>
                </div>
                <div className="struns flex justify-end min-w-[150px] items-baseline">
                  <div className="sover text-[12px] leading-[1.33] tracking-[0.4px] font-semibold text-[#787878] m-[5px]">
                    ({visitorScoreArr?.overs})
                  </div>
                  <div className="srw font-semibold text-black text-[28px] leading-[42px] tracking-[0.14px]">
                    {visitorScoreArr?.score}/{visitorScoreArr?.wickets}
                  </div>
                </div>
              </div>
            </div>
            <div className="stitle flex justify-center items-center">
              <p className="text-sm font-semibold mt-[10px] text-center leading-[20px] tracking-[0.28px] mb-[15px]">
                {apiData.note}
              </p>
            </div>
            <div className="stable">
              <div className="table-head z-0 bg-white h-12 relative flex items-center overflow-auto border-y-[1px] border-solid border-[#e6e7ec]">
                <div
                  className={`flex items-center justify-center cursor-pointer px-5 w-full min-w-fit`}
                >
                  <div
                    onClick={() => {
                      console.log("actice is working ");
                      setActive("Fantasy");
                    }}
                    className={`w-auto text-sm leading-[1.43] tracking-[0.56px] ${
                      active == "Fantasy"
                        ? "text-black font-semibold"
                        : "text-[#66718c] font-normal"
                    }  `}
                  >
                    Fantasy
                  </div>
                  <div
                    className={`${
                      active == "Fantasy" ? "bg-[rgb(255,80,0)] rounded-md" : ""
                    } w-[100px] h-[3px] overflow-hidden top-[41px] absolute`}
                  ></div>
                </div>
                <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                  <div
                    onClick={() => setActive("Info")}
                    className={`w-auto text-sm leading-[1.43] tracking-[0.56px] ${
                      active == "Info"
                        ? "text-black font-semibold"
                        : "text-[#66718c] font-normal"
                    }  `}
                  >
                    Info
                  </div>
                  <div
                    className={`${
                      active == "Info" ? "bg-[rgb(255,80,0)] rounded-md" : ""
                    } w-[100px] h-[3px] overflow-hidden top-[41px] absolute`}
                  ></div>
                </div>
                <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                  <div
                    onClick={() => setActive("Live")}
                    className={`w-auto text-sm leading-[1.43] tracking-[0.56px] ${
                      active == "Live"
                        ? "text-black font-semibold"
                        : "text-[#66718c] font-normal"
                    }  `}
                  >
                    Live
                  </div>
                  <div
                    className={`${
                      active == "Live" ? "bg-[rgb(255,80,0)] rounded-md" : ""
                    } w-[100px] h-[3px] overflow-hidden top-[41px] absolute`}
                  ></div>
                </div>
                <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                  <div
                    onClick={() => setActive("ScoreBoard")}
                    className={`w-auto text-sm leading-[1.43] tracking-[0.56px] ${
                      active == "ScoreBoard"
                        ? "text-black font-semibold"
                        : "text-[#66718c] font-normal"
                    }  `}
                  >
                    Scorecard
                  </div>
                  <div
                    className={`${
                      active == "ScoreBoard"
                        ? "bg-[rgb(255,80,0)] rounded-md"
                        : ""
                    } w-[100px] h-[3px] overflow-hidden top-[41px] absolute`}
                  ></div>
                </div>
                <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                  <div
                    onClick={() => setActive("Squad")}
                    className={`w-auto text-sm leading-[1.43] tracking-[0.56px] ${
                      active == "Squad"
                        ? "text-black font-semibold"
                        : "text-[#66718c] font-normal"
                    }  `}
                  >
                    Squad
                  </div>
                  <div
                    className={`${
                      active == "Squad" ? "bg-[rgb(255,80,0)] rounded-md" : ""
                    } w-[100px] h-[3px] overflow-hidden top-[41px] absolute`}
                  ></div>
                </div>
              </div>
              <div className="min-h-[500px]">
                {active === "ScoreBoard" ? (
                  <>
                    <ScoreCard
                      team={localScoreArr}
                      fixture={apiData}
                      code={apiData?.localteam?.code}
                      batting={localBatting}
                      extras={localextras}
                      bowling={visitorbowling}
                      notbat={localnotbat}
                    ></ScoreCard>
                    <ScoreCard
                      team={visitorScoreArr}
                      fixture={apiData}
                      code={apiData?.visitorteam?.code}
                      batting={visitorBatting}
                      extras={visitorextras}
                      bowling={localbowling}
                      notbat={visitornotbat}
                    ></ScoreCard>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ScoreBoard;
