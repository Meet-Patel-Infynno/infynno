import classNames from "classnames";
import React, { useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import Filter from "../form/Filter";
import Pagination from "../form/Pagination";
import Loading from "../loader/Loading";

const AppointmentView = ({ setShowCard }) => {
  const handleViewAppointment = (appointment) => {
    setShowCard({ status: appointment.id, data: appointment });
  };
  const { appointments, isLoading } = useSelector((state) => ({
    appointments: state.appointment.appointments,
    isLoading: state.appointment.isLoading,
  }));
  useEffect(() => {}, [appointments]);
  return (
    <>
      <div className="w-full text-center py-8 mt-5">
        <h3 className="text-3xl">Appointments List</h3>
      </div>
      <div className="grid gap-y-6 w-max mx-auto max-w-654 cursor-pointer">
        <div className="w-full">
          <Filter />
        </div>
        {!isLoading ? (
          appointments.length > 0 ? (
            appointments?.map((appointment) => {
              return (
                <div key={appointment?.id}>
                  <div className="flex font-josefin shadow-confirmation-shadow w-max bg-white hover:bg-appointment-form">
                    <div className="py-3 px-5 md:py-6 md:px-10 min-w-[230px] md:w-[632px]">
                      <div className="flex gap-x-5 flex-col sm:flex-row w-full justify-between">
                        <div className="flex gap-x-5 gap-y-3 flex-col">
                          <p className="font-medium text-xl leading-6 tracking-tight">
                            {appointment?.appointment_name}
                          </p>
                          <p
                            className={classNames(
                              "font-medium text-xl leading-6 tracking-tight",
                              appointment?.status === "Panding"
                                ? "text-orange-500"
                                : appointment?.status === "Rejected"
                                ? "text-red-500"
                                : "text-green-600"
                            )}
                          >
                            {appointment?.status}
                          </p>
                        </div>
                        <p className="font-medium text-sm leading-6 text-black truncate max-w-180 w-full block tracking-tight">
                          {appointment?.appointment_service
                            ?.map((data) => {
                              return data?.service_name;
                            })
                            .join(" , ")}
                        </p>
                        <p>
                          {appointment?.appointment_date
                            .split("-")
                            .reverse()
                            .join("-")}
                        </p>
                        <div className="flex gap-3 sm:block">
                          <p className="font-medium text-xs xs:text-sm leading-6 tracking-tight">
                            {appointment?.appointment_time}
                          </p>
                          <p className="font-medium text-xs xs:text-sm leading-6 tracking-tight">
                            {appointment?.location}
                          </p>
                        </div>
                      </div>
                    </div>
                    <button
                      id={2}
                      className="bg-orange-500 px-3 md:px-5 text-white"
                      onClick={() => handleViewAppointment(appointment)}
                    >
                      View
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Appointment Booked Yet </p>
          )
        ) : (
          <div className="w-full md:w-[707px] h-60 flex justify-center items-center">
            <Loading width="w-16" height="h-16" className="text-orange-500" />
          </div>
        )}
      </div>
      <div className="pagiination mt-12">
        {/* <ReactPaginate
          renderOnZeroPageCount={null}
          breakLabel="..."
          nextLabel=">"
          previousLabel="<"
          marginPagesDisplayed={3}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(20 / 5)}
          containerClassName={"flex justify-center items-center gap-x-4"}
          pageClassName={
            "bg-white h-9 w-9 hover:bg-orange-400 hover:text-white flex justify-center items-center border border-solid border-[#E4E4EB] rounded-md"
          }
          pageLinkClassName={""}
          previousClassName={
            "prev-btn bg-white w-9 h-9 hover:bg-orange-400 hover:text-white flex justify-center items-center rounded-md"
          }
          previousLinkClassName={""}
          nextClassName={"next-btn"}
          nextLinkClassName={
            "w-9 h-9 bg-white hover:bg-orange-400 hover:text-white flex justify-center items-center rounded-md"
          }
          breakClassName={
            "bg-white border border-solid hover:bg-orange-400 hover:text-white border-[#E4E4EB] rounded-md w-9 h-9 flex justify-center items-center"
          }
          breakLinkClassName={""}
          activeClassName={
            "text-white border-[2px] border-solid border-orange-400 bg-orange-400"
          }
          onPageChange={handlePageClick}
        /> */}
        <Pagination />
      </div>
    </>
  );
};

export default AppointmentView;
