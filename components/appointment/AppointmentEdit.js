import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteAppointment,
  updateAppointment,
} from "../../redux/reducers/AppointmentSlice";
import { fetchBarberDetails } from "../../redux/reducers/ServiceProviderSlice";
import Button from "../form/Button";
import Modal from "../form/Modal";
import { ArrowLeft, Check, Cross } from "../icons";

const AppointmentEdit = ({ AppointmentId, setShowCard, appointmentData }) => {
  const [modal, setModal] = useState({
    isVisible: false,
    id: null,
  });

  const handleModal = () => {
    setModal({ ...modal, isVisible: true, id: appointmentData?.id });
  };

  const handleCancel = () => {
    setModal({ isVisible: false, id: null });
    setShowCard({ status: 0 });
    !beauticianId
      ? dispatch(deleteAppointment(appointmentData?.id))
      : dispatch(
          updateAppointment({
            id: appointmentData?.id,
            data: { status: "Rejected" },
          })
        );
  };
  const handleAccepted = () => {
    setShowCard({ status: 0 });
    dispatch(
      updateAppointment({
        id: appointmentData.id,
        data: { status: "Approved" },
      })
    );
  };
  const handleBack = () => {
    setShowCard({ status: 0, data: null });
  };
  const dispatch = useDispatch();
  const barberDetail = useSelector(
    (state) => state.serviceProvider.barberDetail?.profile
  );

  useEffect(() => {
    dispatch(fetchBarberDetails(appointmentData?.beautician_id_id));
  }, [beauticianId, appointmentData]);

  const total = appointmentData?.appointment_service
    ?.map((data) => data.price)
    .reduce((a, b) => a + b, 0);
  const { beauticianId } = useSelector((state) => ({
    beauticianId: state.authentication.userData?.beautician?.id,
  }));
  return (
    <div className="w-full px-5">
      <p
        className="text-lg w-full text-black cursor-pointer mt-5"
        onClick={handleBack}
      >
        <div className="w-max mt-7 ml-7 sm:ml-14 md:ml-24 md:mt-14">
          <ArrowLeft />
        </div>
      </p>
      <div className="py-16 px-10 sm:px-20 font-josefin shadow-confirmation-shadow w-full md:max-w-654 md:mx-auto bg-appointment-form mt-24">
        <div className="grid gap-y-1 sm:gap-y-3">
          <p className="font-medium text-xl leading-6 sm:text-3xl sm:leading-8 pb-3 tracking-tight">
            {appointmentData?.appointment_name}
          </p>
          <p className="font-medium text-lg leading-5 sm:text-2xl sm:leading-6 tracking-tight">
            {appointmentData?.appointment_time}
          </p>
          <p className="font-medium text-lg leading-5 sm:text-2xl sm:leading-6 tracking-tight">
            {appointmentData?.appointment_date.split("-").reverse().join("-")}
          </p>
          <p className="font-medium text-lg leading-5 sm:text-2xl sm:leading-6 tracking-tight">
            {appointmentData?.location}
          </p>
          <p className="font-medium text-lg leading-5 sm:text-2xl sm:leading-6 tracking-tight">
            Total cost: ${total}
          </p>
          <p className="font-medium text-lg leading-5 sm:text-2xl sm:leading-6 tracking-tight">
            Status :{" "}
            <span
              className={`${
                appointmentData?.status === "Panding"
                  ? "text-orange-500"
                  : appointmentData?.status === "Rejected"
                  ? "text-red-500"
                  : "text-green-600"
              }`}
            >
              {appointmentData?.status}
            </span>
          </p>
        </div>
        <div className="grid gap-y-8 py-12">
          {appointmentData?.appointment_service?.map((data) => {
            return (
              <div key={data.id}>
                <div className="md:pl-3 flex justify-between">
                  <div className="bg-white py-3 px-6 grid gap-y-2 w-full">
                    <div className="flex gap-2 sm:gap-3 sm:items-center flex-col sm:flex-row">
                      <p className="font-normal text-base sm:text-xl leading-5 sm:whitespace-nowrap">
                        {barberDetail && barberDetail[0]?.shop_name}
                      </p>
                      <span className="font-medium text-gray-500 text-xs leading-3 sm:whitespace-nowrap">
                        Color expert
                      </span>
                    </div>
                    <p className="font-normal text-base leading-4 text-orange-500">
                      {data.service_name}
                    </p>
                  </div>
                  <Button className="max-w-180">{data?.duration} min </Button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid gap-y-8 pt-3 justify-center">
          <p className="font-normal text-xl leading-5 sm:text-2xl sm:leading-6 text-center">
            {beauticianId
              ? !appointmentData.status === "Approved" ||
                appointmentData.status === "Panding" ||
                appointmentData.status === "Rejected"
                ? "Would you like to accept this job?"
                : "Reject Appointment"
              : "Cancel Appointment"}
          </p>
          <div className="flex justify-center gap-9">
            {beauticianId
              ? (!appointmentData.status === "Approved" ||
                  appointmentData.status === "Panding" ||
                  appointmentData.status === "Rejected") && (
                  <button
                    onClick={handleAccepted}
                    className="h-14 w-14 rounded-full bg-orange-500 flex items-center justify-center"
                  >
                    <Check />
                  </button>
                )
              : ""}
            {(!appointmentData.status === "Rejected" ||
              appointmentData.status === "Panding" ||
              appointmentData.status === "Approved" ||
              !beauticianId) && (
              <button
                onClick={handleModal}
                className="h-14 w-14 rounded-full bg-red-500 flex items-center justify-center"
              >
                <Cross className="text-white h-8 w-8" />
              </button>
            )}
            <Modal bgColor="bg-white" setModal={setModal} modal={modal}>
              <div className="flex flex-col gap-16">
                <div className="flex justify-center font-medium text-lg">
                  Are You Sure ?
                </div>
                <div className="w-full flex gap-4 justify-center">
                  <Button
                    className="py-2 max-w-100 "
                    bgColor="bg-red-600"
                    onClick={handleCancel}
                  >
                    {beauticianId ? "Reject" : "Delete"}
                  </Button>
                  <Button
                    className="py-2 max-w-100 border border-slate-400 bg-transparent"
                    bgColor="bg-transperent"
                    textColor="text-black"
                    onClick={() => setModal({ isVisible: false, id: null })}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentEdit;
