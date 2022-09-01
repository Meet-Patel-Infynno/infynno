import { createSlice ,createAsyncThunk } from "@reduxjs/toolkit";
import {HYDRATE} from "next-redux-wrapper";
import axios from "axios"

const initialState = {
    isLoading : false,
    cars:[],
    count:0,
    make:null,
    models:null,
    bodytypes:null,
    extcolors:null,
    intcolors:null,
    transmissions:null,
    dtrains:null,
    fuelType:null,
    features:null,
    page:1,
    radius:100,
    carTypes:["New Car", "Used Car"] ,
    makeCars:[],
    modelData:[],
    bodyTypeData:[],
    price:[0,100000],
    year:[1990 , 2022],
    extcolorData:[],
    intcolorData:[],
    transmissionsData:[],
    dtrainsData:[],
    fuelTypeData:[],
    featuresData:[],

}

export const fetchCars=createAsyncThunk(
    "homePage/fetch" , async (page ,{getState})=>{
        const state = getState().homePageSlice;
        console.log(state.modelData,'thunk state')
        try {
            const url = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&transmission=${state.transmissionsData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false`
            const countUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=count`
           
            const modelUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=model`
            const bodyTypeUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=body_type`
            const extcolorUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=exterior_color`
            const intcolorUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=interior_color`
            const transmissionsUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=transmission`
            const dtrainsUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=drivetrain`
            const fuelTypeUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=fuel_type`
            const featuresUrl = `https://autodigg.com/ad-api/cars/list?make=${state.makeCars}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&return=features`
           
           
           
           
            // const modelUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=model`
            // const bodyTypeUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=body_type`
            // const extcolorUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=exterior_color`
            // const intcolorUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=interior_color`
            // const transmissionsUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=transmission`
            // const dtrainsUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=drivetrain`
            // const fuelTypeUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=fuel_type`
            // const featuresUrl = `https://autodigg.com/ad-api/cars/list?features=${state.featuresData}&fuel_type=${state.fuelTypeData}&drivetrain=${state.dtrainsData}&transmission=${state.transmissionsData}&interior_color=${state.intcolorData}&exterior_color=${state.extcolorData}&year_from=${state.year[0]}&year_to=${state.year[1]}&price_from=${state.price[0]}&price_to=${state.price[1]}&body_type=${state.bodyTypeData}&model=${state.modelData}&usedCar=false&car_type=${state.carTypes},Certified+pre-owned&make=${state.makeCars}&page=${state.page}&radius=${state.radius}&newCar=false&return=features`
            const data = await axios.all([
                axios.get(url),
                axios.get(countUrl),
                axios.get(modelUrl),
                axios.get(bodyTypeUrl),
                axios.get(extcolorUrl),
                axios.get(intcolorUrl),
                axios.get(transmissionsUrl),
                axios.get(dtrainsUrl),
                axios.get(fuelTypeUrl),
                axios.get(featuresUrl),
            ])
            // const response = await axios.get(url)
            // console.log(object);
            return data;
        } catch (error) {
            console.log(error)
        }
    }
 )

const homePageSlice = createSlice({
    name:"homePage",
    initialState,
    reducers:{
        getCars:(state , action)=>{
            state.cars = action.payload
        },
        getCount:(state,action)=>{
            state.count = action.payload
        },
        getMake:(state , action)=>{
            state.make = action.payload
        },
        getModels:(state , action)=>{
            state.models = action.payload
        },
        getBodyType:(state , action)=>{
            state.bodytypes = action.payload
        },
        getExtColors:(state , action)=>{
            state.extcolors = action.payload
        },
        getIntColors:(state , action)=>{
            state.intcolors = action.payload
        },
        getTransmissions:(state , action)=>{
            state.transmissions = action.payload
        },
        getDriveTrains:(state , action)=>{
            state.dtrains = action.payload
        },
        getFuelTypes:(state , action)=>{
            state.fuelType = action.payload
        },
        getFeatures:(state , action)=>{
            state.features = action.payload
        },
        getPaginate:(state , action)=>{
            state.page = action.payload
        },
        getCarTypes:(state , action)=>{
            state.carTypes = action.payload
        },
        getRadius:(state,action)=>{
            state.radius = action.payload
        },
        setMakeCars:(state , action)=>{
            state.makeCars = action.payload
        },
        setmodelData:(state,action)=>{
            state.modelData = action.payload
        },
        setbodyTypeData:(state , action)=>{
            state.bodyTypeData = action.payload
        },
        setPrice:(state , action)=>{
            state.price = action.payload
        },
        setYear:(state , action)=>{
            state.year = action.payload
        },
        setExtColorData:(state,action)=>{
            state.extcolorData = action.payload
        },
        setIntColorData:(state,action)=>{
            state.intcolorData = action.payload
        },
        setTransmssionsData:(state,action)=>{
            state.transmissionsData = action.payload
        },
        setDriveTrainData:(state,action)=>{
            state.dtrainsData = action.payload
        },
        setFuelTypeData:(state,action)=>{
            state.fuelTypeData = action.payload
        },
        setFeaturesData:(state,action)=>{
            state.featuresData = action.payload
        },
    },
    extraReducers:{
        [fetchCars.pending]:(state , action)=>{
            state.isLoading = true
        },
        [fetchCars.fulfilled]:(state , action)=>{
            state.isLoading = false
            state.cars = action.payload[0].data
            console.log(action);
            state.count = action.payload[1].data.count
            state.models = action.payload[2].data
            state.bodytypes = action.payload[3].data
            state.extcolors = action.payload[4].data
            state.intcolors = action.payload[5].data
            state.transmissions = action.payload[6].data
            state.dtrains = action.payload[7].data
            state.fuelType = action.payload[8].data
            state.features = action.payload[9].data
        },
        [fetchCars.rejected]:(state , action)=>{
            state.isLoading = false
            console.log(action)
        },
    }
})

export const {getCars , getCarTypes,setTransmssionsData,setIntColorData,setFuelTypeData,setFeaturesData,setDriveTrainData,setExtColorData,setYear,setbodyTypeData,setPrice ,setmodelData, setMakeCars , getRadius ,getPaginate, getCount , getMake,getBodyType,getDriveTrains,getExtColors,getFeatures,getFuelTypes,getIntColors,getModels,getTransmissions} = homePageSlice.actions
export default homePageSlice.reducer