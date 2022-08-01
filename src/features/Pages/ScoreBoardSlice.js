import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { api_base_url, api_include, api_key } from "../../config";

const initialState = {
    apiData:[],
    localScoreArr:[],
    visitorScoreArr:[],
    localBatting:[],
    visitorBatting:[],
    localextras:[],
    visitorextras:[],
    localbowling:[],
    visitorbowling:[],
    localnotbat:[],
    visitornotbat:[],
    localDropDown:false,
    vsitorDropDown:false,
    msg:""
}

export const scbFixture = createAsyncThunk(
    "getFixtureWithId/api",(id)=>{
        const response = axios.get(
            api_base_url +
              "fixtures/" +
              id +
              api_key +
              api_include +
              "localteam,scoreboards,visitorteam,bowling.team,batting.team,runs.team,bowling.bowler,batting.batsman,batting.catchstump,batting.bowler,lineup"
          );
          return response;
    }
)

const ScoreBoardSlice = createSlice({
    name:"getFixtureWithId",
    initialState,
    reducers:{
        cleanUp:(state)=>{
            state.apiData=[];
            state.localScoreArr=[];
            state.visitorScoreArr=[];
            state.localBatting=[];
            state.visitorBatting=[];
            state.localextras=[];
            state.visitorextras=[];
            state.localbowling=[];
            state.visitorbowling=[];
            state.localnotbat=[];
            state.visitornotbat=[];
            state.localDropDown=false;
            state.vsitorDropDown=false;
            state.msg="";
        }
    },
    extraReducers(builder){
        builder
        .addCase(scbFixture.pending,(state , action)=>{
            state.msg = "Pendingggg";
        })
        .addCase(scbFixture.fulfilled,(state , action)=>{
            state.apiData = action.payload.data.data;
            console.log("action",action.payload.data.data)

            state.localScoreArr = action.payload.data.data.runs.filter((data)=>{
                if (data.team_id === action.payload.data.data.localteam.id) {
                    return data;
                }
            })[0]
            
            state.visitorScoreArr = action.payload.data.data.runs.filter((data)=>{
                if (data.team_id === action.payload.data.data.visitorteam.id) {
                    return data;
                }
            })[0]
            
            state.localBatting = action.payload.data.data.batting.filter((data)=>{
                if (data.team_id === action.payload.data.data.localteam.id) {
                    return data;
                }
            })
            
            state.visitorBatting = action.payload.data.data.batting.filter((data)=>{
                if (data.team_id === action.payload.data.data.visitorteam.id) {
                    return data;
                }
            })
            
            state.localextras = action.payload.data.data.scoreboards.filter((data)=>{
                if (data.team_id === action.payload.data.data.localteam.id) {
                    if (data.type === "extra") {
                      return data;
                    }
                  }
            })[0]
            
            state.visitorextras = action.payload.data.data.scoreboards.filter((data)=>{
                if (data.team_id === action.payload.data.data.visitorteam.id) {
                    if (data.type === "extra") {
                      return data;
                    }
                }
            })[0]
            
            state.localbowling = action.payload.data.data.bowling.filter((data)=>{
                if (data.team_id === action.payload.data.data.localteam.id) {
                    return data;
                }
            })
            
            state.visitorbowling = action.payload.data.data.bowling.filter((data)=>{
                if (data.team_id === action.payload.data.data.visitorteam.id) {
                    return data;
                }
            })
            
            state.localnotbat = action.payload.data.data.lineup.filter((data)=>{
                return state.localBatting.every((nb) =>
                         data.id !== nb.player_id && data.lineup.team_id == action.payload.data.data.localteam.id 
                     )
            })
            
            state.visitornotbat = action.payload.data.data.lineup.filter((data)=>{
                     return state.visitorBatting.every((nb) =>
                         data.id !== nb.player_id && data.lineup.team_id == action.payload.data.data.visitorteam.id 
                     )
            })      
        })
        .addCase(scbFixture.rejected,(state , action)=>{
            state.msg = "Rejectedddd";
        })
    }

})

export const {cleanUp} = ScoreBoardSlice.actions;
export default ScoreBoardSlice.reducer;