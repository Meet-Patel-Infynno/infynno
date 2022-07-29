import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { api_base_url, api_include, api_key } from "../../config";

const initialState = {
    fixtures:[],
    finished:[],
    upcoming:[],
    msg:""
}

export const fixture = createAsyncThunk(
    "getFixture/api",()=>{
        const response = axios.get(
            api_base_url +
              "fixtures" +
              api_key +
              api_include +
              "runs,localteam,visitorteam,league,season"
          );
          return response;
    }
)

const HomeSlice = createSlice({
    name:"getFixture",
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fixture.pending,(state , action)=>{
            state.msg = "Pendingggg";
        })
        .addCase(fixture.fulfilled,(state , action)=>{
            state.fixtures = action.payload.data.data.slice(2,12);

            state.finished = action.payload.data.data.filter((data)=>{
                if(data.live === false){
                    return data;
                }
            })
            
            state.upcoming = action.payload.data.data.filter((data)=>{
                if(data.status === "Aban."){
                    return data;
                }
            })
        })
        .addCase(fixture.rejected,(state , action)=>{
            state.msg = "Rejectedddd";
        })
    }

})

export default HomeSlice.reducer;