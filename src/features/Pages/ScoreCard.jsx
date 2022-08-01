import React, { useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const ScoreCard = (props) => {
  const [dropDown, setDropDown] = useState(false);

  function upDown() {
    if (dropDown) {
      setDropDown(false);
    } else {
      setDropDown(true);
    }
  }
  console.log(props, "propssssss");
  return (
    <>
      <section className="scorecard bg-white w-full">
        <div className="sccontent flex items-center justify-between box-border border-b-[1px] border-solid border-[#e6e6e6] bg-[#fafafa] h-[50px] w-full px-[18px] py-[12px]">
          <div className="left text-[16px] leading-[1.25] tracking-[0.5px] font-semibold text-black">
            {props?.code}
          </div>
          <div className="right flex items-center justify-center gap-[20px]">
            <div className="score text-sm tracking-[0.25px] font-semibold text-black m-w-[75px] mr-20px">
              {props.team?.score}/{props.team?.wickets}
            </div>
            <div className="dropdown cursor-pointer" onClick={upDown}>
              <IoIosArrowDropdownCircle
                className={`w-7 h-7 ${
                  dropDown ? "rotate-180" : ""
                } transition-all ease-in-out duration-500`}
                fill="rgb(255, 185, 153)"
              ></IoIosArrowDropdownCircle>
            </div>
          </div>
        </div>
        <div
          className={` ${
            dropDown ? "max-h-[1560px]  " : "max-h-[0px]"
          }  flex flex-col justify-center items-center w-full transition-all ease-in-out duration-500 overflow-hidden`}
        >
          <table className="w-full">
            <div className="overflow-hidden flex flex-col justify-center items-center w-full">
              <div className="flex items-start justify-between w-full mt-[20px] bg-[#fafafa] text-[#787878] p-[10px] rounded-[10px] tracking-[1.5px]">
                <div className="text-[12px]">BATSMEN</div>
                <div className="flex gap-[10px] text-[12px]">
                  <div className="text-[12px] font-semibold min-w-[60px]">
                    R
                  </div>
                  <div className="min-w-[60px]">B</div>
                  <div className="min-w-[60px]">4S</div>
                  <div className="min-w-[60px]">6S</div>
                  <div className="min-w-[60px]">S/R</div>
                </div>
              </div>
            </div>
            {props.batting.length !== 0 &&
              props.batting.map((data) => {
                return (
                  <>
                    <div className="flex items-start justify-between border-b border-b-[rgb(245,245,245)] border-solid bg-white text-[#787878] p-[10px] rounded-none tracking-[1.5px]">
                      <div className="pl-[7px] flex flex-col items-start justify-center">
                        <div className="text-sm cursor-pointer text-[rgb(0,129,255)]">
                          {data.batsman?.fullname}
                          {data.batsman?.position.name === "Wicketkeeper"
                            ? "(wk)"
                            : ""}
                        </div>
                        <div className="pt-[5px] text-[11px] leading-[1.27] tracking-[0.3px] text-[rgb(120,120,120)]">
                          {data.catch_stump_player_id
                            ? `c ${data.catchstump.firstname.substring(0, 1)} ${
                                data.catchstump.lastname
                              }`
                            : ""}
                          &nbsp;
                          {data.bowling_player_id
                            ? `b ${data.bowler.firstname.substring(0, 1)} ${
                                data.bowler.lastname
                              }`
                            : "Not Out"}
                        </div>
                      </div>
                      <div className="flex text-sm gap-[10px]">
                        <div className="font-semibold min-w-[60px]">
                          {data?.score}
                        </div>
                        <div className="min-w-[60px]">{data?.ball}</div>
                        <div className="min-w-[60px]">{data?.four_x}</div>
                        <div className="min-w-[60px]">{data?.six_x}</div>
                        <div className="min-w-[60px]">{data?.rate}</div>
                      </div>
                    </div>
                  </>
                );
              })}
            <div className="flex items-start justify-between border-b border-b-[rgb(245,245,245)] border-solid bg-white text-[#787878] p-[10px] rounded-none tracking-[1.5px]">
              <div className="pl-[7px] flex flex-col items-start justify-center">
                <div className="text-sm tracking-[0.25px] font-semibold cursor-pointer text-[rgb(20,20,20)]">
                  Extras
                </div>
              </div>
              <div className="flex text-sm pr-3">
                <div className="font-semibold text-xs flex items-center text-[rgb(120,120,120)] leading-[1.33] min-w-[60px]">
                  <div className="text-black text-[14px] font-semibold">
                    {props.extras?.bye +
                      props.extras?.leg_bye +
                      props.extras?.noball_balls +
                      props.extras?.wide +
                      props.extras?.penalty}
                  </div>{" "}
                  (b {props.extras?.bye}, lb {props.extras?.leg_bye}, nb{" "}
                  {props.extras?.noball_balls}, w {props.extras?.wide}, p{" "}
                  {props.extras?.penalty})
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between border-b border-b-[rgb(245,245,245)] border-solid bg-white text-[#787878] p-[10px] rounded-none tracking-[1.5px]">
              <div className="pl-[7px] flex flex-col items-start justify-center">
                <div className="text-sm tracking-[0.25px] font-semibold cursor-pointer text-[rgb(20,20,20)]">
                  Did Not Bat
                </div>
              </div>
              <div className="flex text-sm w-[355px]">
                <div className="font-semibold text-xs text-[rgb(120,120,120)] leading-[1.33] min-w-[60px]">
                  {props.notbat &&
                    props.notbat
                      .map((data) => {
                        return data.fullname;
                      })
                      .join(",")}
                </div>
              </div>
            </div>
            <div className="flex items-start justify-between bg-white text-[#787878] p-[10px] rounded-none tracking-[1.5px]">
              <div className="pl-[7px] flex flex-col items-start justify-center">
                <div className="text-lg tracking-[0.5px] leading-[1.25] font-semibold cursor-pointer text-[rgb(20,20,20)]">
                  Total Score
                </div>
              </div>
              <div className="flex text-sm pr-3">
                <div className="flex justify-center items-baseline gap-[5px] font-semibold text-xs text-[rgb(120,120,120)] leading-[1.33] min-w-[60px]">
                  <div className="text-black text-lg font-semibold leading-[1.25] tracking-[0.5px]">
                    {props.team?.score}/{props.team?.wickets}
                  </div>
                  <div className="text-[14px] tracking-[0.25px]">
                    ({props.team?.overs} Overs)
                  </div>
                </div>
              </div>
            </div>
          </table>
          <table className="w-full">
            <div className="overflow-hidden flex flex-col justify-center items-center w-full">
              <div className="flex items-start justify-between w-full mt-[20px] bg-[#fafafa] text-[#787878] p-[10px] rounded-[10px] tracking-[1.5px]">
                <div className="text-[12px]">BOWLER</div>
                <div className="flex gap-[10px] text-[12px]">
                  <div className="min-w-[60px]">O</div>
                  <div className="min-w-[60px]">M</div>
                  <div className="min-w-[60px]">R</div>
                  <div className="min-w-[60px] text-black font-semibold">W</div>
                  <div className="min-w-[60px]">ECO</div>
                </div>
              </div>
            </div>
            {props.bowling.length !== 0 &&
              props.bowling.map((data) => {
                return (
                  <>
                    <div className="flex items-start justify-between border-b border-b-[rgb(245,245,245)] border-solid bg-white text-[#787878] p-[10px] rounded-none tracking-[1.5px]">
                      <div className="pl-[7px] flex flex-col items-start justify-center">
                        <div className="text-sm cursor-pointer text-[rgb(0,129,255)]">
                          {data.bowler?.fullname}
                        </div>
                      </div>
                      <div className="flex text-sm gap-[10px]">
                        <div className="min-w-[60px]">{data?.overs}</div>
                        <div className="min-w-[60px]">{data?.medians}</div>
                        <div className="min-w-[60px]">{data?.runs}</div>
                        <div className="min-w-[60px] font-semibold">
                          {data?.wickets}
                        </div>
                        <div className="min-w-[60px]">{data?.rate}</div>
                      </div>
                    </div>
                  </>
                );
              })}
          </table>
          <table className="w-full">
            <div className="overflow-hidden flex flex-col justify-center items-center w-full">
              <div className="flex items-start justify-between w-full mt-[20px] bg-[#fafafa] text-[#787878] p-[10px] rounded-[10px] tracking-[1.5px]">
                <div className="text-[12px]">FALL OF WICKETS</div>
                <div className="flex gap-[35px] text-[12px]">
                  <div className="min-w-[60px]">SCORE</div>
                  <div className="min-w-[60px]">OVER</div>
                </div>
              </div>
            </div>
            {props.batting.length !== 0 &&
              props.batting
                .slice()
                .sort((a, b) => (a.fow_balls > b.fow_balls ? 1 : -1))
                .map((data) => {
                  if (data.fow_balls !== 0) {
                    return (
                      <>
                        <div className="flex items-start justify-between border-b border-b-[rgb(245,245,245)] border-solid bg-white text-[#787878] p-[10px] rounded-none tracking-[1.5px]">
                          <div className="pl-[7px] flex flex-col items-start justify-center">
                            <div className="text-sm cursor-pointer text-[rgb(0,129,255)]">
                              {data.batsman?.fullname}
                            </div>
                          </div>
                          <div className="flex text-sm gap-[35px]">
                            <div className="min-w-[60px]">
                              {data?.fow_score}
                            </div>
                            <div className="min-w-[60px]">
                              {data?.fow_balls}
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  }
                })}
          </table>
        </div>
      </section>
    </>
  );
};

export default ScoreCard;
