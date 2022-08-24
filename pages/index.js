import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Card from "../components/Card";
import Sidebar from "../components/Sidebar";

export async function getServerSideProps() {
  const res = await axios.get(
    "https://autodigg.com/ad-api/cars/list?car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&year=2011,2021&return=count"
  );
  const data = await res.data;

  const cars = await axios.get(
    `https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=1&radius=100&newCar=false`
  );
  const allCars = await cars.data;

  const make = await axios.get(
    "https://autodigg.com/ad-api/cars/list?return=make"
  );
  const makes = await make.data;

  const model = await axios.get(
    "https://autodigg.com/ad-api/cars/list?make=&return=model"
  );
  const models = await model.data;

  const bodytype = await axios.get(
    "https://autodigg.com/ad-api/cars/list?return=body_type"
  );
  const bodytypes = await bodytype.data;

  const excolor = await axios.get(
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=exterior_color"
  );
  const extcolors = await excolor.data;

  const intcolor = await axios.get(
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=interior_color"
  );
  const intcolors = await intcolor.data;

  const transmission = await axios.get(
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=transmission"
  );
  const transmissions = await transmission.data;

  const dtrain = await axios.get(
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=transmission"
  );
  const dtrains = await dtrain.data;

  const fuel = await axios.get(
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=transmission"
  );
  const fuelType = await fuel.data;

  const feature = await axios.get(
    "https://autodigg.com/ad-api/cars/list?body_type=&make=&model=&usedCar=true&car_type=Used+car&page=1&radius=100&year=2011,2021&zip=&return=features"
  );
  const features = await feature.data;

  return {
    props: {
      count: data,
      allCars,
      makes,
      models,
      bodytypes,
      extcolors,
      intcolors,
      transmissions,
      dtrains,
      fuelType,
      features,
    },
  };
}

export default function Home({
  count,
  allCars,
  makes,
  models,
  bodytypes,
  intcolors,
  extcolors,
  transmissions,
  dtrains,
  fuelType,
  features,
}) {
  const [items, setItems] = useState([]);
  const [newCars, setNewCars] = useState(false);

  console.log(newCars, "newcarssssss");

  async function fetchCars(currentPage) {
    const cars = await axios.get(
      `https://autodigg.com/ad-api/cars/list?usedCar=false&car_type=Used+car,New+car,Certified+pre-owned&page=${currentPage}&radius=100&newCar=false`
    );
    const allCars = await cars.data;
    setItems(allCars);
  }

  useEffect(() => {
    setItems(allCars);
  }, []);

  const handlePageClick = async (data) => {
    console.log(data.selected, "dadadadada");

    let currentPage = data.selected + 1;
    fetchCars(currentPage);
  };
  console.log(makes, "makessss");
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
                Showing {count && count.count} cars
              </div>
              <div className="hbtn"></div>
            </div>
          </div>
          <div className="hbottom flex gap-6">
            <div className="sidebar">
              <Sidebar
                makes={makes}
                models={models}
                bodytypes={bodytypes}
                extcolors={extcolors}
                intcolors={intcolors}
                transmissions={transmissions}
                dtrains={dtrains}
                fuelType={fuelType}
                features={features}
                {...{ newCars, setNewCars }}
              />
            </div>
            <div className="card flex flex-col  items-center gap-6">
              {items &&
                items.map((data) => {
                  return (
                    <>
                      <Card cars={data}></Card>
                    </>
                  );
                })}
              <div className="pagiination mt-[50px]">
                <ReactPaginate
                  breakLabel="..."
                  nextLabel=">"
                  previousLabel="<"
                  marginPagesDisplayed={3}
                  pageRangeDisplayed={5}
                  pageCount={Math.ceil(count.count / 20)}
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
                  // renderOnZeroPageCount={null}
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
