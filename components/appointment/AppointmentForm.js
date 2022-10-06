import { Form, Formik } from "formik";
import React, { useState } from "react";
import { appointmentValidation } from "../../util/validationSchema";
import Button from "../form/Button";
import InputField from "../form/InputField";
import Modal from "../form/Modal";
import MultiSelect from "../form/MultiSelect";
import { ArrowDown, Calendar, Clock } from "../icons";

const AppointmentForm = ({ setConfirm }) => {
  const [modal, setModal] = useState({
    isVisible: false,
  });
  const [selectedBarber, setSelectedBarber] = useState(null);
  const [initialValues, setInitialValue] = useState({
    name: "",
    location: "",
    date: "",
    time: "",
    services: "",
    barber: "",
  });

  const barbers = ["Tod", "Sam", "villiam", "Jhonssaon", "Cineman"];
  const handleModal = () => {
    setModal({ ...modal, isVisible: true });
  };
  const handleBarber = (e) => {
    setSelectedBarber(e.target.value);
  };
  const handleBarberSubmit = (setFieldValue) => {
    setModal({ isVisible: false });
    setFieldValue("barber", selectedBarber);
  };
  const handleAppointmentSubmit = (val) => {
    setInitialValue({
      ...initialValues,
      ...val,
      date: new Date(val.date).toLocaleDateString("en-IN"),
      time: new Date(val.time).toLocaleTimeString("en-IN"),
    });
    setConfirm(true);
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
              initialValues={initialValues}
              validationSchema={appointmentValidation}
              onSubmit={handleAppointmentSubmit}
              enableReinitialize
            >
              {({ setFieldValue, values }) => (
                <Form className="flex flex-col gap-9 md:gap-16 w-ful xs:px-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-7 md:gap-x-16 md:gap-y-10">
                    <InputField
                      type="text"
                      name="name"
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
                      dateFormat="dd/MM/yyyy"
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
                        dateFormat="h:mm aa"
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
                      // value={barber}
                      placeholder="Chose Barber"
                      onClick={handleModal}
                      className="bg-transparent z-10 relative placeholder:text-gray-900 border-gray-800 focus:outline-none font-medium text-base leading-4 tracking-wide"
                      endIcon={<ArrowDown className="text-gray-900 -z-10" />}
                    />
                    <Modal
                      bgColor={"bg-appointment-form"}
                      setModal={setModal}
                      modal={modal}
                    >
                      <div className="flex flex-col gap-16">
                        <div className="grid grid-cols-3 gap-x-14 gap-y-10">
                          {barbers.map((data, index) => {
                            return (
                              <div key={index}>
                                <Button
                                  value={data}
                                  textColor={`hover:text-white text-black ${
                                    selectedBarber === data && "text-white"
                                  }`}
                                  bgColor={`bg-transparent hover:bg-orange-500 ${
                                    selectedBarber === data && "bg-orange-500"
                                  }`}
                                  className="py-2 border hover:outline-none border-orange-500"
                                  onClick={(e) => handleBarber(e)}
                                >
                                  {data}
                                </Button>
                              </div>
                            );
                          })}
                        </div>
                        <div className="w-full flex justify-center">
                          <Button
                            className="py-3 max-w-180"
                            onClick={() => handleBarberSubmit(setFieldValue)}
                          >
                            Done
                          </Button>
                        </div>
                      </div>
                    </Modal>
                  </div>
                  <div className="w-full  flex justify-center items-center">
                    <Button type="submit" className="py-3 max-w-xs">
                      Done
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
