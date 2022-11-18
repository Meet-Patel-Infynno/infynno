import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppointmentForm from "../../components/appointment/AppointmentForm";
import Confirmation from "../../components/appointment/Confirmation";

const Appointment = () => {
  const { confirm } = useSelector((state) => state.appointment);
  return (
    <div className=" mt-14 mb-14 md:mt-28 md:mb-28">
      {!confirm ? <AppointmentForm /> : <Confirmation />}
    </div>
  );
};

export default Appointment;
