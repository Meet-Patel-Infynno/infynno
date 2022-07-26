import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api_base_url, api_include, api_key } from "../config";
import ScoreCard from "./ScoreCard";

const ScoreBoard = () => {
  const [apiData, setApiData] = useState([]);
  const [localScoreArr, setscoreArr] = useState([]);
  const [visitorScoreArr, setVisitorscoreArr] = useState([]);
  const [localBatting, setLocalBattng] = useState([]);
  const [visitorBatting, setvisitorBattng] = useState([]);
  const [localextras, setlocalextras] = useState([]);
  const [visitorextras, setvisitorextras] = useState([]);
  const [localbowling, setlocalbowling] = useState([]);
  const [visitorbowling, setvisitorbowling] = useState([]);
  const [localnotbat, setlocalnotbat] = useState([]);
  const [visitornotbat, setvisitornotbat] = useState([]);
  const { id } = useParams();
  console.log(id, "idddddd");

  async function fetchData() {
    const response = await axios.get(
      api_base_url +
        "fixtures/" +
        id +
        api_key +
        api_include +
        "localteam,scoreboards,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman,batting.catchstump,batting.bowler,lineup"
    );
    // console.log(response.data.data, "scoreboard");
    const res = response.data.data;
    setApiData(res);

    const localscore = res.runs.filter((data) => {
      if (data.team_id === res.localteam.id) {
        return data;
      }
    });
    // console.log(localscore[0], "asasasas");
    setscoreArr(localscore[0]);

    const visitorscore = res.runs.filter((data) => {
      if (data.team_id === res.visitorteam.id) {
        return data;
      }
    });
    // console.log(visitorscore[0], "visitor");
    setVisitorscoreArr(visitorscore[0]);

    const locbat = res.batting.filter((data) => {
      if (data.team_id === res.localteam.id) {
        return data;
      }
    });
    setLocalBattng(locbat);

    const visbat = res.batting.filter((data) => {
      if (data.team_id === res.visitorteam.id) {
        return data;
      }
    });
    setvisitorBattng(visbat);

    const ext = res.scoreboards.filter((data) => {
      if (data.team_id === res.localteam.id) {
        if (data.type === "extra") {
          return data;
        }
      }
    });
    setlocalextras(ext[0]);

    const extv = res.scoreboards.filter((data) => {
      if (data.team_id === res.visitorteam.id) {
        if (data.type === "extra") {
          return data;
        }
      }
    });
    setvisitorextras(extv[0]);

    const localbolling = res.bowling.filter((data) => {
      if (data.team_id === res.localteam.id) {
        return data;
      }
    });
    setlocalbowling(localbolling);

    const visitorbolling = res.bowling.filter((data) => {
      if (data.team_id === res.visitorteam.id) {
        return data;
      }
    });
    setvisitorbowling(visitorbolling);

    const localnb = res.lineup.filter((data) => {
      if (res.localteam.id === data.lineup.team_id)
        return locbat.every((nb) => data.id !== nb.batsman.id);
    });
    setlocalnotbat(localnb);

    const visitornb = res.lineup.filter((data) => {
      if (res.visitorteam.id === data.lineup.team_id)
        return visbat.every((nb) => data.id !== nb.batsman.id);
    });
    setvisitornotbat(visitornb);
  }
  console.log(localnotbat, "localnotbat");
  console.log(visitornotbat, "visitornotbat");
  console.log(apiData, "apidata");
  console.log(localBatting, "localbatting");

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
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
              <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                <div className="pointer-events-none text-sm transition-all leading-[1.43] tracking-[0.56px] z-[2] text-[#66718c] font-normal">
                  Fantasy
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                <div className="pointer-events-none text-sm transition-all leading-[1.43] tracking-[0.56px] z-[2] text-[#66718c] font-normal">
                  Info
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                <div className="pointer-events-none text-sm transition-all leading-[1.43] tracking-[0.56px] z-[2] text-[#66718c] font-normal">
                  Live
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                <div className="pointer-events-none text-sm transition-all leading-[1.43] tracking-[0.56px] z-[2] text-[#66718c] font-normal">
                  Scorecard
                </div>
              </div>
              <div className="flex items-center justify-center cursor-pointer px-5 w-full min-w-fit">
                <div className="pointer-events-none text-sm transition-all leading-[1.43] tracking-[0.56px] z-[2] text-[#66718c] font-normal">
                  Squad
                </div>
              </div>
            </div>
            <div className="min-h-[500px]">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScoreBoard;
