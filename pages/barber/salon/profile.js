import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import blogImg from "../../../assets/images/blog.svg";
import ServiceImg from "../../../assets/images/barberService.svg";
import BarberProfileCard from "../../../components/salon/BarberProfileCard";
import { Plus, Trash } from "../../../components/icons";
import ServiceModal from "../../../components/salon/ServiceModal";
import AddServicesForm from "../../../components/salon/AddServicesForm";
import AddPhotoForm from "../../../components/salon/AddPhotoForm";
import { useDispatch, useSelector } from "react-redux";
import {
  addProviderPhoto,
  addProviderServices,
  deleteProviderPhoto,
  fetchProviderPhoto,
  fetchProviderServices,
  fetchServices,
  setProviderServices,
} from "../../../redux/reducers/ServiceProviderSlice";
import { getBeauticianData } from "../../../util/user";
import Cookies from "js-cookie";
import axiosInterceptor from "../../../util/axiosInterceptor";
import Modal from "../../../components/form/Modal";
import Button from "../../../components/form/Button";

const Profile = ({ providerData }) => {
  const { NEXT_PUBLIC_APP_BASE_URL } = process.env;

  const {
    userId,
    beauticianId,
    allServices,
    isLoading,
    images,
    provider_services,
  } = useSelector((state) => ({
    userId: state.authentication.userData.user?.id,
    beauticianId: state.authentication.userData?.beautician?.id,
    allServices: state.serviceProvider.ServiceProviderData.allServices,
    isLoading: state.serviceProvider.ServiceProviderData.isLoading,
    images: state.serviceProvider.ServiceProviderData?.providerData.images,
    provider_services:
      state.serviceProvider.ServiceProviderData?.providerData.services,
  }));

  const [showModal, toggleModal] = useState(false);
  const [available_services, setAvailableServices] = useState(
    providerData?.services || []
  );
  const [service_photos, setServicesPhotos] = useState(
    providerData?.photos || []
  );
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (provider_services) {
      let temp_services = providerData?.allServices.filter((service) =>
        provider_services.some((s) => s === service.id)
      );
      setAvailableServices(
        [...new Set(temp_services.map((service) => service.type_name))].map(
          (type) => ({
            type,
            services: [
              ...temp_services.filter((tem) => tem.type_name === type),
            ],
          })
        )
      );
    } else if (
      Array.isArray(providerData?.services) &&
      providerData?.services.length > 0
    ) {
      let temp_services = providerData?.allServices.filter((service) =>
        providerData?.services.some((s) => s === service.id)
      );
      setAvailableServices(
        [...new Set(temp_services.map((service) => service.type_name))].map(
          (type) => ({
            type,
            services: [
              ...temp_services.filter((tem) => tem.type_name === type),
            ],
          })
        )
      );
    }
    if (images) {
      setServicesPhotos(images);
    } else {
      providerData?.photos && setServicesPhotos(providerData?.photos);
    }
  }, [provider_services, images, service_photos, providerData?.photos]);

  const openModal = (e) => {
    toggleModal(e.target.id);
  };
  const [modal, setModal] = useState({
    isVisible: false,
    id: null,
  });

  const handleModal = (id) => {
    setModal({ ...modal, isVisible: true, id: id });
  };
  const handleDelte = () => {
    dispatch(deleteProviderPhoto(modal.id));
    setModal({ isVisible: false, id: null });
  };

  const handleAddServices = (res) => {
    if (
      providerData?.services
        ? providerData?.services.length > 0
        : provider_services.length > 0
    ) {
      dispatch(addProviderServices({ services_id: res?.services_id }));
    } else {
      dispatch(
        setProviderServices({
          beautician_id: beauticianId,
          services_id: res?.services_id,
        })
      );
    }
    toggleModal(false);
  };

  const handleUploadImages = (res) => {
    if (userId) {
      const data = new FormData();
      data.append("user_id", beauticianId);
      res.map((img) => {
        data.append("image", img, img.name);
      });
      dispatch(addProviderPhoto(data));
    }
    toggleModal(false);
  };
  return (
    <>
      <section className="font-josefin w-full flex justify-center px-6">
        <div className="w-full md:overflow-hidden h-52 md:h-80 absolute top-0 -z-20 ">
          <Image
            src={blogImg}
            layout="fill"
            objectFit="cover"
            objectPosition={"top"}
            alt="img"
          />
        </div>
        <div className="max-w-6xl mt-32 md:mt-56 lg:mt-52 grid md:grid-cols-34_58 lg:grid-cols-30_65 xs:justify-center sm:justify-between w-full">
          <BarberProfileCard
            className="hidden md:block"
            profileData={providerData?.profile}
            editor
            availibilty={providerData?.availibilty}
          />
          <div className="py-5  ">
            <div className="flex justify-between lg:mb-14">
              <div className="w-ful">
                <h2 className="font-semibold md:text-3xl lg:text-5xl max-w-md text-white truncate">
                  {providerData?.profile?.shop_name}
                </h2>
                <p className="font-normal lg:text-2xl text-white">
                  {providerData?.profile?.city} {providerData?.profile?.state}
                </p>
              </div>
              <div className="flex gap-2 md:gap-9">
                <div className="flex flex-col justify-center items-center">
                  <p className="font-normal lg:text-2xl tracking-wide text-white">
                    {providerData?.photos.length}
                  </p>
                  <p className="font-light lg:text-2xl tracking-wide text-white">
                    photos
                  </p>
                </div>
                <div className="bg-white border border-white"></div>
                <div className="flex flex-col justify-center items-center">
                  <p className="font-normal lg:text-2xl tracking-wide text-white">
                    300
                  </p>
                  <p className="font-light lg:text-2xl tracking-wide text-white">
                    Followers
                  </p>
                </div>
              </div>
            </div>
            <BarberProfileCard
              className="block sm:grid grid-cols-2 mt-12 md:hidden"
              editor
              availibilty={providerData?.availibilty}
            />
            <div className=" mt-10 lg:mt-20 w-full">
              <div className="flex justify-between items-center mb-6 md:mb-16">
                <h2 className="font-medium text-4xl leading-10 text-black ">
                  Services
                </h2>
                <a
                  className="flex items-center gap-3 cursor-pointer font-normal leading-6 text-2xl"
                  id="service"
                  onClick={openModal}
                >
                  Add Services
                  <span
                    id="service"
                    className="h-8 w-8 bg-gray-1000 rounded-full flex items-center justify-center"
                  >
                    <Plus />
                  </span>
                </a>
              </div>
              <div className="py-5 px-10 bg-white flex flex-col gap-10">
                {available_services.length > 0 ? (
                  available_services.map((service, sid) => (
                    <div key={sid}>
                      <p className="font-semibold w-max pb-2 text-3xl leading-8 min-w-150 border-b border-solid border-gray-600">
                        {service?.type}
                      </p>
                      <div className="flex justify-center flex-col w-full pt-5 gap-y-4">
                        {Array.isArray(service?.services) &&
                          service?.services.map((sub_service, i) => (
                            <div key={i} className="grid grid-cols-2_1_1">
                              <div>{sub_service.service_name}</div>
                              <div>{sub_service.price}$</div>
                              <div>{sub_service.duration} min</div>
                            </div>
                          ))}
                      </div>
                    </div>
                  ))
                ) : (
                  <p> No services available. </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 w-full mt-14 flex flex-col justify-center items-center font-josefin">
        <div className="max-w-6xl flex flex-col gap-5 md:gap-12 w-full">
          <div className="flex justify-between items-center mb-6 md:mb-16">
            <h2 className="font-medium text-4xl leading-10 text-black ">
              Photos
            </h2>
            <a
              id="photo"
              className="flex items-center gap-3 cursor-pointer font-normal leading-6 text-2xl"
              onClick={openModal}
            >
              Add Photos
              <span
                id="photo"
                className="h-8 w-8 bg-gray-1000 rounded-full flex items-center justify-center"
              >
                <Plus />
              </span>
            </a>
          </div>
          {Array.isArray(service_photos) && service_photos.length > 0 ? (
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 md:gap-x-6 lg:gap-12 2xl:gap-y-28 md:px-20">
              {service_photos.map((data, index) => {
                return (
                  <div key={index} className="relative">
                    <Image
                      className="rounded-md"
                      src={NEXT_PUBLIC_APP_BASE_URL + data.image}
                      alt="img"
                      height={300}
                      width={280}
                    />
                    <div
                      onClick={() => handleModal(data.id)}
                      className="w-fit float-right right-7 bottom-4 cursor-pointer absolute"
                    >
                      <Trash className="text-red-600" />
                    </div>
                  </div>
                );
              })}
              <Modal bgColor="bg-white" setModal={setModal} modal={modal}>
                <div className="flex flex-col gap-16">
                  <div className="flex justify-center font-medium text-lg">
                    Are You Sure ?
                  </div>
                  <div className="w-full flex gap-4 justify-center">
                    <Button
                      className="py-2 max-w-100 "
                      bgColor="bg-red-600"
                      onClick={handleDelte}
                    >
                      Delete
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
          ) : (
            <p className="text-3xl text-center w-full">No images found</p>
          )}
        </div>
      </section>

      <section className="px-6 w-full mt-14 md:mt-20 font-josefin flex flex-col justify-center items-center">
        <div className="max-w-6xl w-full flex flex-col gap-5 md:gap-12">
          <h2 className="font-medium text-4xl text-black">About</h2>
          <p className="font-light text-xl text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="font-light text-xl text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="font-light text-xl text-black">
            Lorem Ipsum has been the industry&apos;s standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
        </div>
      </section>

      <ServiceModal
        className={`bg-gradient-main px-9 ${
          showModal === "photo" ? "fixed" : "absolute"
        }`}
        toggleModal={toggleModal}
        showModal={showModal}
      >
        {showModal === "service" ? (
          <AddServicesForm
            handleAddServices={handleAddServices}
            selectedServices={provider_services || providerData?.services}
            allServices={
              allServices.length > 0 ? allServices : providerData?.allServices
            }
          />
        ) : showModal === "photo" ? (
          <AddPhotoForm handleUploadImages={handleUploadImages} />
        ) : null}
      </ServiceModal>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const beautician_data = JSON.parse(
    context.req.cookies?.beautician_data || null
  );
  const token = context.req.cookies?.access;
  axiosInterceptor.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  try {
    const res = await Promise.all([
      axiosInterceptor.get("/user/beautician-photo/"),
      axiosInterceptor.get(
        `/barber-services/?beautician_id=${beautician_data.id}`
      ),
      axiosInterceptor.get("/user/all-servicedetail/"),
      axiosInterceptor.get("/user/register-beautician/"),
      axiosInterceptor.get("/barber-availabilities/"),
    ]);
    return {
      props: {
        providerData: {
          photos: res[0]?.data.data || [],
          services: res[1]?.data?.data[0]?.services_id || [],
          allServices: res[2]?.data?.service || [],
          profile: res[3]?.data?.data[0] || [],
          availibilty: res[4]?.data?.data || [],
        },
      },
    };
  } catch (e) {
    throw "find salon error : " + e.response?.data;
  }
  return {
    props: {
      providerData: [],
    },
  };
};

export default Profile;
