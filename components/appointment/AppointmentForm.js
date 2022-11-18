import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  bookAppointment,
  setConfirmServices,
} from "../../redux/reducers/AppointmentSlice";
import { appointmentValidation } from "../../util/validationSchema";
import Button from "../form/Button";
import InputField from "../form/InputField";
import Modal from "../form/Modal";
import MultiSelect from "../form/MultiSelect";
import { ArrowDown, Calendar, Clock } from "../icons";
import Loading from "../loader/Loading";

const AppointmentForm = () => {
  const dispatch = useDispatch();
  const { allServices, isLoading } = useSelector((state) => ({
    allServices: state.appointment.allServices,
    isLoading: state.appointment.isLoading,
  }));
  const [modal, setModal] = useState({
    isVisible: false,
  });
  const [selectedBarber, setSelectedBarber] = useState(null);

  const { barbers } = useSelector((state) => ({
    barbers: state.appointment.beauticians,
  }));
  const handleModal = () => {
    setModal({ ...modal, isVisible: true });
  };

  const handleBarber = (id, name) => {
    setSelectedBarber({ id: id, name: name });
  };
  const handleBarberSubmit = (e, setFieldValue) => {
    setModal({ isVisible: false });
    setFieldValue("barber", selectedBarber?.id);
  };
  const handleAppointmentSubmit = (val) => {
    dispatch(
      bookAppointment({
        location: val.location,
        appointment_name: val.appointment_name,
        appointment_service: val.services,
        beautician_id: val.barber,
        appointment_date: new Date(val.date).toLocaleDateString("fr-CA"),
        appointment_time: new Date(val.time).toLocaleTimeString("en-US", {
          hourCycle: "h23",
        }),
      })
    );
    const confirmServices = allServices.filter((service) =>
      val.services.some((id) => service.id === id)
    );
    dispatch(setConfirmServices(confirmServices));
  };

  const setServices = (selectedServices, setFieldValue) => {
    setFieldValue("services", selectedServices);
  };
  return (
    <>
      <section className="flex flex-col justify-center items-center px-3 md:px-8 ">
        <div className=" md:max-w-5xl w-full flex flex-col gap-10 md:gap-20 px-8 lg:px-40 py-8 md:py-14 bg-appointment-form">
          <div>
            <h2 className="text-center font-josefin font-medium text-2xl md:text-36 leading-9 text-orange-500">
              Create Appointment
            </h2>
          </div>
          <div className="w-full">
            <Formik
              initialValues={{
                name: "",
                location: "",
                date: "",
                time: "",
                services: "",
                barber: "",
              }}
              validationSchema={appointmentValidation}
              onSubmit={handleAppointmentSubmit}
              enableReinitialize
            >
              {({ setFieldValue, values }) => (
                <Form className="appointment-form flex flex-col gap-9 md:gap-16 w-ful xs:px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-x-16 md:gap-y-10">
                    <InputField
                      type="text"
                      name="appointment_name"
                      placeholder="Appointment Name"
                      className="bg-transparent placeholder:text-gray-900 border-gray-800 focus:outline-none font-medium text-base leading-4 tracking-wide"
                    />
                    <InputField
                      type="text"
                      name="location"
                      placeholder="location"
                      className="bg-transparent placeholder:text-gray-900 border-gray-800 focus:outline-none font-medium text-base leading-4 tracking-wide"
                    />
                    <InputField
                      type="date"
                      name="date"
                      placeholderText="Date"
                      className="bg-transparent z-10 relative placeholder:text-gray-900 border-gray-800 focus:outline-none font-medium text-base leading-4 tracking-wide"
                      endIcon={<Calendar className="text-gray-900" />}
                      minDate={new Date()}
                      dateFormat="yyyy-MM-dd"
                    />
                    <div className="relative z-30">
                      <InputField
                        type="time"
                        name="time"
                        placeholderText="Time"
                        className="bg-transparent relative z-10 placeholder:text-gray-900 border-gray-800 focus:outline-none font-medium text-base leading-4 tracking-wide"
                        showTimeSelect
                        showTimeSelectOnly
                        timeCaption="Time"
                        dateFormat="hh:mm:ss"
                        endIcon={<Clock className="text-gray-900" />}
                      />
                    </div>
                    <MultiSelect
                      handleApply={(setSelectedServices) =>
                        setServices(setSelectedServices, setFieldValue)
                      }
                      endIcon={<ArrowDown />}
                      name="services"
                    />
                    <InputField
                      type="text"
                      name="barber"
                      value={selectedBarber?.name}
                      placeholder="Chose Barber"
                      onClick={handleModal}
                      className="bg-transparent z-10 relative placeholder:text-gray-900 border-gray-800 focus:outline-none font-medium text-base leading-4 tracking-wide"
                      endIcon={<ArrowDown className="text-gray-900 -z-10" />}
                    />
                    <Modal
                      bgColor="bg-appointment-form"
                      setModal={setModal}
                      modal={modal}
                    >
                      <div className="flex flex-col gap-16">
                        <div className="grid grid-cols-3 gap-x-14 gap-y-10">
                          {barbers?.map((data, index) => {
                            return (
                              <div key={index}>
                                <Button
                                  value={data.id}
                                  textColor={`hover:text-white text-black ${
                                    selectedBarber?.id === data.id &&
                                    "text-white"
                                  }`}
                                  bgColor={`bg-transparent hover:bg-orange-500 ${
                                    selectedBarber?.id === data.id &&
                                    "bg-orange-500"
                                  }`}
                                  className="py-2 border hover:outline-none border-orange-500"
                                  onClick={() =>
                                    handleBarber(data.id, data.first_name)
                                  }
                                >
                                  {data.first_name}
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-full flex justify-center">
                          <Button
                            className="py-3 max-w-180"
                            onClick={(e) =>
                              handleBarberSubmit(e, setFieldValue)
                            }
                          >
                            Done
                          </Button>
                        </div>
                      </div>
                    </Modal>
                  </div>
                  <div className="w-full  flex justify-center items-center">
                    <Button
                      type="submit"
                      className="py-3 max-w-xs disabled:bg-gray-500"
                      disabled={isLoading}
                    >
                      {isLoading ? <Loading /> : "Done"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentForm;
