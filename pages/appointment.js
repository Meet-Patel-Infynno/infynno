import React, { useState } from "react";
import AppointmentForm from "../components/appointment/AppointmentForm";
import Confirmation from "../components/appointment/Confirmation";

const Appointment = () => {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className=" mt-14 mb-14 md:mt-28 md:mb-28">
      {!confirm ? (
        <AppointmentForm setConfirm={setConfirm} />
      ) : (
        <Confirmation />
      )}
    </div>
  );
};

export default Appointment;
