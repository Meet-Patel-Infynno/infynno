import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import AppointmentEdit from "../../components/appointment/AppointmentEdit";
import AppointmentView from "../../components/appointment/AppointmentView";
import { viewAppointment } from "../../redux/reducers/AppointmentSlice";

const Appointment = () => {
  const [showCard, setShowCard] = useState({
    status: 0,
    data: null,
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(viewAppointment());
  }, [showCard]);
  return (
    <>
      {showCard.status !== 0 ? (
        <AppointmentEdit
          setShowCard={setShowCard}
          appointmentData={showCard.data}
          appointmentId={showCard}
        />
      ) : (
        <AppointmentView setShowCard={setShowCard} />
      )}
    </>
  );
};

export default Appointment;
