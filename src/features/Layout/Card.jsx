import React, { useEffect, useState } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { AiFillPlayCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Bars } from "react-loader-spinner";

const Card = ({ response }) => {
  const [localScoreArr, setscoreArr] = useState([]);
  const [visitorScoreArr, setVisitorscoreArr] = useState([]);
  const [res, setresponse] = useState();
  // console.log(response, "from card");

  function team() {
    const localscore = response.runs.filter((data) => {
      if (data.team_id === response.localteam.id) {
        return data;
      }
    });
    // console.log(localscore[0], "asasasas");
    setscoreArr(localscore[0]);

    const visitorscore = response.runs.filter((data) => {
      if (data.team_id === response.visitorteam.id) {
        return data;
      }
    });
    // console.log(visitorscore[0], "visitor");
    setVisitorscoreArr(visitorscore[0]);
  }
  // console.log(visitorScoreArr, "visitor state");

  useEffect(() => {
    setTimeout(() => {
      setresponse(response);
      team();
    }, 1000);
  }, []);

  return (
    <>
      {res ? (
        <section className=" card flex flex-col w-full justify-center items-center relative h-[238px] group">
          <div className="ctop h-[100px] shadow-6xl relative">
            <img
              className="rounded-t-xl bg-white bg-cover w-[325px] h-[100px]"
              src="https://images.fancode.com/eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvcHJvZC1pbWFnZXMvMjAyMi8wNy9JbmRpYS10b3VyLW9mLUVuZ2xhbmRfT0RJXzAyLmpwZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJmaXQiOiJjb3ZlciIsImhlaWdodCI6MTI1LCJ3aWR0aCI6NDEwLCJwb3NpdGlvbiI6InRvcCJ9fX0="
              alt=""
            />
            <div className="absolute bg-gradient-to-t from-[#000000e6] to-[#00000000] top-0 left-0 right-0 w-[325px] h-[100px]"></div>
            <p className=" absolute h-[100px] left-0 right-0 m-auto text-center top-[58px] text-white uppercase text-[10px] text-ellipsis overflow-hidden whitespace-nowrap leading-relaxed tracking-[1.4px]">
              {response.round} {response.league.name}, {response.season.name}
            </p>
          </div>
          <div className="cbottom z-0 w-[325px] h-[93px] pt-5 px-[10px] flex flex-col bg-white border border-solid border-card justify-center items-center rounded-b-xl">
            <div
              className={`midbtn absolute top-[84px] left-0 right-0 m-auto flex justify-center items-center ${
                response.live && response.status !== "Aban."
                  ? "bg-active-rgba text-white"
                  : "bg-white text-active-rgba"
              }  h-8 w-fit shadow-5xl px-3 rounded-[30px]`}
            >
              <Link to={`scoreboard/${response.id}`}>
                <button className="flex justify-center items-center uppercase text-sm font-semibold leading-none tracking-[1.4px]">
                  {response.live && response.status !== "Aban." ? (
                    <div className="flex justify-center items-center gap-1">
                      <AiFillPlayCircle className="w-5 h-5"></AiFillPlayCircle>
                      <p>Watch Live</p>
                    </div>
                  ) : response.status === "Aban." ? (
                    "Upcoming"
                  ) : (
                    "Result"
                  )}
                </button>
              </Link>
            </div>
            <div className="cbup flex justify-between items-center w-full">
              <div className="cbleft flex gap-3">
                <div className="cflag flex flex-col">
                  <img
                    className="w-8 h-8"
                    src={response.localteam.image_path}
                    alt=""
                  />
                  <p className="text-black text-[10px] tracking-[1.4px] px-[5px]">
                    {response.localteam.code}
                  </p>
                </div>
                <div className="cdetail">
                  <p className="run text-[#666666] font-semibold text-[14px] leading-6">
                    {localScoreArr?.score}/{localScoreArr?.wickets}
                  </p>
                  <p className="over text-[#999999] font-normal text-xs">
                    {localScoreArr?.overs} overs
                  </p>
                </div>
              </div>
              <div className="vs flex justify-center items-center">
                <div className="w-[1px] h-10 bg-[#dcdcdc]"></div>
                <div className=" absolute w-4 h-4 text-[10px] leading-4 rounded-full bg-[#dcdcdc] text-center text-white">
                  V
                </div>
              </div>
              <div className="cbright flex gap-3">
                <div className="cdetail">
                  <p className="run text-[#666666] text-right font-semibold text-[14px] leading-6">
                    {visitorScoreArr?.score}/{visitorScoreArr?.wickets}
                    {/* {console.log(response.runs[1])} */}
                  </p>
                  <p className="over text-[#999999] font-normal text-xs">
                    {visitorScoreArr?.overs} overs
                  </p>
                </div>
                <div className="cflag">
                  <img
                    className="w-8 h-8"
                    src={response.visitorteam.image_path}
                    alt=""
                  />
                  <p className="text-black text-[10px] tracking-[1.4px] px-[5px]">
                    {response.visitorteam.code}
                  </p>
                </div>
              </div>
            </div>
            <div className="cbdown mt-2 mb-2">
              <p className="text-xs leading-snug tracking-[0.24px] mb-2 text-black text-center">
                {response.note}
              </p>
            </div>
          </div>
          <div className="flex relative bottom-2 justify-center items-center h-[38px] rounded-b-xl z-[-1] bg-[#e6e6e6] w-[325px] invisible group-hover:visible">
            <div className="flex justify-center items-center gap-2 pt-2">
              <p className="flex justify-center items-center text-black text-[11px] leading-[1.27] tracking-[0.22px]">
                More Cricket
              </p>
              <div>
                <IoIosArrowDroprightCircle
                  className="w-3 h-3 flex justify-center items-center"
                  fill="#ff9666"
                ></IoIosArrowDroprightCircle>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className=" animate-pulse card flex flex-col w-full justify-center items-center relative h-[238px] group">
          <div className="ctop w-[324px] h-[100px] shadow-6xl relative">
            <div className="absolute bg-gradient-to-t from-[#000000e6] to-[#00000000] top-0 left-0 right-0 w-[325px] h-[80px]"></div>
            <p className=" absolute h-[100px] left-0 right-0 m-auto text-center top-[58px] text-white uppercase text-[10px] text-ellipsis overflow-hidden whitespace-nowrap leading-relaxed tracking-[1.4px]"></p>
          </div>
          <div className="cbottom mt-[-35px] z-0 w-[325px] h-[100px] pt-5 px-[10px] flex flex-col bg-white border border-solid border-card justify-center items-center rounded-b-xl">
            <div
              className={`midbtn absolute top-[84px] left-0 right-0 m-auto flex justify-center items-center  h-8 w-fit shadow-5xl px-3 rounded-[30px]`}
            >
              <button className="flex justify-center items-center uppercase text-sm font-semibold leading-none tracking-[1.4px]"></button>
            </div>
            <div className="cbup flex justify-between items-center w-full">
              <div className="cbleft flex gap-3">
                <div className="cflag flex flex-col">
                  <div className="bg-slate-300 rounded-full w-[30px] h-[30px]" />
                  <p className="text-black text-[10px] tracking-[1.4px] px-[5px]"></p>
                </div>
                <div className="cdetail">
                  <p className="run text-[#666666] font-semibold text-[14px] leading-6"></p>
                  <p className="over text-[#999999] font-normal text-xs"></p>
                </div>
              </div>
              <div className="vs flex justify-center items-center">
                <div className="w-[1px] h-10 bg-[#dcdcdc]"></div>
                <div className=" absolute w-4 h-4 text-[10px] leading-4 rounded-full bg-[#dcdcdc] text-center text-white">
                  V
                </div>
              </div>
              <div className="cbright flex gap-3">
                <div className="cdetail">
                  <p className="run text-[#666666] text-right font-semibold text-[14px] leading-6"></p>
                  <p className="over text-[#999999] font-normal text-xs"></p>
                </div>
                <div className="cflag">
                  <p className="text-black text-[10px] tracking-[1.4px] px-[5px]"></p>
                  <div className="bg-slate-300 rounded-full w-[30px] h-[30px]" />
                </div>
              </div>
            </div>
            <div className="cbdown mt-2 mb-2">
              <p className=" bg-slate-300 w-[300px] rounded-[20px] h-[10px] text-xs leading-snug tracking-[0.24px] mb-2 text-black text-center"></p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Card;
