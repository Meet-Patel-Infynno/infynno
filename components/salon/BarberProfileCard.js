import Image from "next/image";
import React, { useEffect, useState } from "react";
import Button from "../form/Button";
import { Call, Message, More, Star } from "../icons";
import barberImg from "../../assets/images/barber.svg";
import classNames from "classnames";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { setProviderAvailability } from "../../redux/reducers/ServiceProviderSlice";

import { add, addDays, subDays } from "date-fns";

const { NEXT_PUBLIC_APP_BASE_URL } = process.env;

const BarberProfileCard = ({ className, ...props }) => {
  const { beautician_id, user_id, availibility } = useSelector((state) => ({
    beautician_id: state.authentication.userData?.beautician?.id,
    user_id: state.authentication.userData?.user?.id,
    availibility: state.serviceProvider.ServiceProviderData?.availibility,
  }));
  const [showDatePicker, toggleDatePicker] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [updated, setUpdated] = useState(false);
  const [booked, setBooked] = useState([]);

  const dispatch = useDispatch();

  const showBookedDate = () => {
    const bookedDates = updated
      ? availibility?.map((data) => data.start_date)
      : props.availibilty.map((data) => data.start_date);
    const invalidDates = bookedDates.map((data) => new Date(data));
    setBooked(invalidDates);
  };

  useEffect(() => {
    showBookedDate();
  }, [updated, availibility]);

  const handleProfileButton = (e) => {
    if (props.editor) {
      toggleDatePicker(!showDatePicker);
    }
  };
  const handleHideDatePicker = () => {
    toggleDatePicker(false);
  };

  const filterPassedTime = (time) => {
    const currentDate = new Date();
    const selectedDate = new Date(time);
    const selectedTime = new Date(startTime);

    // return currentDate.getTime() < selectedDate.getTime() && selectedTime.getTime() < selectedDate.getTime() ;
    // return currentDate.getTime() < selectedDate.getTime();
    return true;
  };

  const handleSetAvailability = () => {
    setUpdated(true);
    startDate = new Date(startDate);
    startDate =
      startDate.getFullYear() +
      "-" +
      (startDate.getMonth() + 1) +
      "-" +
      startDate.getDate();
    beautician_id &&
      dispatch(
        setProviderAvailability({
          "start_date": startDate,
          "end_date": startDate,
          "start_time": new Date(startTime).toLocaleTimeString("en-IN", {
            hourCycle: "h23",
          }),
          "end_time": new Date(endTime).toLocaleTimeString("en-IN", {
            hourCycle: "h23",
          }),
          "on_call": startDate,
          "beautician_id": beautician_id,
          "user_id": user_id,
        })
      );
  };
  return (
    <>
      <div
        className={`fixed top-0 left-0 h-screen w-screen z-10 bg-overlay ${
          showDatePicker ? "block" : "hidden"
        }`}
        onClick={handleHideDatePicker}
      ></div>
      <div className={classNames("relative", className)}>
        <div className="relative h-365">
          <Image
            src={
              props?.profileData?.profile_image
                ? NEXT_PUBLIC_APP_BASE_URL + props?.profileData?.profile_image
                : barberImg
            }
            layout="fill"
            className="rounded-md"
            alt="img"
          />
          <div className="absolute w-full flex justify-center gap-5 lg:gap-11 items-center bottom-5">
            <Button
              className="py-2 max-w-180 rounded-3xl w-full"
              onClick={handleProfileButton}
            >
              {props.editor ? "Availability" : "Follow barber"}
            </Button>
            {!props.editor && <More className="text-white" />}
          </div>
        </div>
        <div className="relative max-w-365 flex flex-col gap-6 bg-white w-full py-7 rounded-md">
          <div
            className={`absolute w-full items-center sm:items-start flex flex-col md:flex-row sm:w-max top-0 z-50 bg-gradient-main rounded-lg shadow-blog-card ${
              showDatePicker ? "block" : "hidden"
            } py-8 px-4 xs:px-8 md:px-12`}
          >
            <div className="availability-data-picker md:pr-6 md:border-r border-solid border-gray-600 flex gap-x-3">
              <ReactDatePicker
                inline
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                }}
                dateFormat="YYYY-MM-DD"
                // highlightDates={bookedDates}
                excludeDates={booked}
                // filterDate={isWeekday}
              />
              <ReactDatePicker
                inline
                selected={startTime}
                className="!w-max"
                showTimeSelect
                showTimeSelectOnly
                onChange={(date) => {
                  setStartTime(date);
                  setEndTime(null);
                }}
                timeIntervals={30}
                timeCaption="Start Time"
                dateFormat="h:mm aa"
              />
              <ReactDatePicker
                inline
                selected={endTime}
                showTimeSelect
                showTimeSelectOnly
                onChange={(date) => {
                  setEndTime(date);
                }}
                filterTime={filterPassedTime}
                timeIntervals={30}
                timeCaption="End Time"
                dateFormat="h:mm aa"
              />
            </div>
            <div className="md:pl-12 flex gap-8 flex-col">
              <p className="font-semibold pt-1 text-xl leading-5 text-black text-center">
                Availability
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex gap-9">
                  <span className="h-5 w-5 bg-red-500 rounded-full"></span>
                  <p>Booked</p>
                </div>
                <div className="flex gap-9">
                  <span className="h-5 w-5 bg-green-500 rounded-full"></span>
                  <p>Available</p>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <p className="font-light text-xl leading-5 text-black">
                  Sunday, 3rd
                </p>
                <Button className="py-2 px-5" onClick={handleSetAvailability}>
                  Set Availability
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 bg-white w-full px-14">
            <div>
              <div className="flex gap-2">
                <p className="font-semibold leading-5 text-base text-black-600">
                  {props?.profileData?.stars || 0.0}
                </p>
                <div className="flex gap-1">
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        props?.profileData?.stars &&
                        props?.profileData?.stars >= 1,
                      "text-gray-600":
                        !props?.profileData?.stars ||
                        props?.profileData?.stars < 1,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        props?.profileData?.stars &&
                        props?.profileData?.stars >= 2,
                      "text-gray-600":
                        !props?.profileData?.stars ||
                        props?.profileData?.stars < 2,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        props?.profileData?.stars &&
                        props?.profileData?.stars >= 3,
                      "text-gray-600":
                        !props?.profileData?.stars ||
                        props?.profileData?.stars < 3,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        props?.profileData?.stars &&
                        props?.profileData?.stars >= 4,
                      "text-gray-600":
                        !props?.profileData?.stars ||
                        props?.profileData?.stars < 4,
                    })}`}
                  />
                  <Star
                    className={`${classNames({
                      "text-orange-600":
                        props?.profileData?.stars &&
                        props?.profileData?.stars >= 5,
                      "text-gray-600":
                        !props?.profileData?.stars ||
                        props?.profileData?.stars < 5,
                    })}`}
                  />
                </div>
              </div>
              <p className="font-normal text-base leading-6 text-black-600">
                {props?.profileData?.reviews || 0} Reviews
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-normal text-xl text-black">About</h2>
              <p className="font-light text-xs text-black">
                {props?.profileData?.about_us}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-3 2xl:gap-8 px-6">
            {props?.profileData?.phone_number && (
              <a
                href={`tel:${props?.profileData?.phone_number}`}
                className="py-3 truncate gap-2 2xl:gap-3 whitespace-nowrap rounded-xl flex bg-orange-500 text-white w-full justify-center items-center"
              >
                <Call className="h-4 w-4" /> Call Now
              </a>
            )}
            <Button
              bgColor="bg-transparent"
              className="border border-orange-500 px-2 whitespace-nowrap py-3 gap-2 2xl:gap-3 rounded-xl"
              textColor="text-black"
            >
              <Message className="w-4 h-4" /> Chat Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BarberProfileCard;
