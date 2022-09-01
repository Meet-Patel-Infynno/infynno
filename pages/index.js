import axios from "axios";
import ReactPaginate from "react-paginate";
import { useSelector, useDispatch } from "react-redux";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";
import NoCars from "../components/noCars";
import {
  fetchCars,
  getBodyType,
  getCars,
  getCount,
  getDriveTrains,
  getExtColors,
  getFeatures,
  getFuelTypes,
  getIntColors,
  getMake,
  getModels,
  getPaginate,
  getTransmissions,
} from "../store/homePageSlice";
import { wrapper } from "../store/store";
import { useEffect, useState } from "react";
import CardLoader from "../components/cardLoader";

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
export async function getServerSideProps() {
  const cars = `https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false`;

  const count =
    "https://autodigg.com/ad-api/cars/list?car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&year=2011,2021&return=count";

  const make = "https://autodigg.com/ad-api/cars/list?return=make";

  const model = "https://autodigg.com/ad-api/cars/list?make=&return=model";

  const bodytype = "https://autodigg.com/ad-api/cars/list?return=body_type";

  const excolor =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=exterior_color";

  const intcolor =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=interior_color";

  const transmission =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=transmission";

  const dtrain =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=drivetrain";

  const fuel =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=fuel_type";

  const feature =
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=features";

  const data = await axios.all([
    axios.get(cars),
    axios.get(count),
    axios.get(make),
    axios.get(model),
    axios.get(bodytype),
    axios.get(excolor),
    axios.get(intcolor),
    axios.get(transmission),
    axios.get(dtrain),
    axios.get(fuel),
    axios.get(feature),
  ]);

  // store.dispatch(getCars(data[0].data));
  // store.dispatch(getCount(data[1].data.count));
  // store.dispatch(getMake(data[2].data));
  // store.dispatch(getModels(data[3].data));
  // store.dispatch(getBodyType(data[4].data));
  // store.dispatch(getExtColors(data[5].data));
  // store.dispatch(getIntColors(data[6].data));
  // store.dispatch(getTransmissions(data[7].data));
  // store.dispatch(getDriveTrains(data[8].data));
  // store.dispatch(getFuelTypes(data[9].data));
  // store.dispatch(getFeatures(data[10].data));

  return {
    props: {
      cars: data[0].data,
      count: data[1].data.count,
      makes: data[2].data,
      models: data[3].data,
      bodyType: data[4].data,
      extColors: data[5].data,
      intColors: data[6].data,
      transmissions: data[7].data,
      dtrains: data[8].data,
      fuelType: data[9].data,
      features: data[10].data,
    },
  };
}
// );

export default function Home(props) {
  const {
    cars,
    count,
    make,
    models,
    bodytypes,
    extcolors,
    intcolors,
    transmissions,
    dtrains,
    fuelType,
    features,
  } = useSelector((state) => state.homePageSlice);

  const dispatch = useDispatch();
  const [data, setData] = useState({
    cars: props.cars,
    count: props.count,
    makes: props.makes,
    models: props.models,
    bodyType: props.bodyType,
    extColors: props.extColors,
    intColors: props.intColors,
    transmissions: props.transmissions,
    dtrains: props.dtrains,
    fuelType: props.fuelType,
    features: props.features,
  });

  console.log(data, "stateDatatatta");

  useEffect(() => {
    if (models) {
      setData({
        cars: cars,
        count: count,
        makes: props.makes,
        models: models,
        bodyType: bodytypes,
        extColors: extcolors,
        intColors: intcolors,
        transmissions: transmissions,
        dtrains: dtrains,
        fuelType: fuelType,
        features: features,
      });
    }
    console.log("update");
  }, [cars, count]);

  const handlePageClick = (data) => {
    let currentPage = data.selected + 1;
    dispatch(getPaginate(currentPage));
    dispatch(fetchCars());
    setData({ cars: [], count: "" });
  };
  return (
    <>
      <section className="Home mt-9 pl-[60px] flex flex-col justify-center items-center pr-[60px]">
        <div className="hmain flex flex-col gap-9">
          <div className="htop flex flex-col gap-2">
            <div className="ttitle font-semibold text-xs leading-4 uppercase text-[#8F90A6]">
              Used cars for sale
            </div>
            <div className="btitle">
              <div className="content font-bold text-[32px] leading-[44px] text-[#28293D]">
                Showing {data.count && data.count} cars
              </div>
              <div className="hbtn"></div>
            </div>
          </div>
          <div className="hbottom flex gap-6">
            <div className="sidebar">
              <Sidebar Data={data} />
            </div>
            <div className="card flex flex-col  items-center gap-6">
              {data.cars.length > 0 ? (
                data.cars.map((data) => {
                  return (
                    <>
                      <Card cars={data}></Card>
                    </>
                  );
                })
              ) : (
                <NoCars />
              )}
              <div className="pagiination mt-[50px]">
                <ReactPaginate
                  renderOnZeroPageCount={null}
                  breakLabel="..."
                  nextLabel=">"
                  previousLabel="<"
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={5}
                  pageCount={Math.ceil(data.count / 20)}
                  containerClassName={
                    "flex justify-center items-center gap-x-[8px]"
                  }
                  pageClassName={
                    "bg-white h-[36px] w-[36px] flex justify-center items-center border border-solid border-[#E4E4EB] rounded-[6px]"
                  }
                  pageLinkClassName={""}
                  previousClassName={
                    "prev-btn w-[36px] h-[36px] flex justify-center items-center rounded-[6px]"
                  }
                  previousLinkClassName={""}
                  nextClassName={"next-btn"}
                  nextLinkClassName={
                    "w-[36px] h-[36px] flex justify-center items-center rounded-[6px]"
                  }
                  breakClassName={
                    "bg-white border border-solid border-[#E4E4EB] rounded-[6px] w-[36px] h-[36px] flex justify-center items-center"
                  }
                  breakLinkClassName={""}
                  activeClassName={
                    "text-[#FF8800] border-[2px] border-solid border-[#FF8800] bg-[#FFFFFF]"
                  }
                  onPageChange={handlePageClick}
                />
              </div>
              <div className="w-[984px] h-[1px] bg-[#E4E4EB] my-[50px]"></div>
              <div className="whycontent flex flex-col gap-3">
                <div className="whtitle font-bold text-[28px] leading-[38px] text-center text-[#28293D]">
                  Why Autodigg?
                </div>
                <div className="whdescrption w-[760px] font-semibold text-sm leading-5 text-center text-[#8F90A6] mb-16">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet. Amet minim
                  mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. Exercitation
                  veniam consequat sunt nostrud amet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
