import { Form, Formik } from 'formik';
import Image from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import ServiceDemo from '../../../assets/images/salonServiceDemo.svg';
import Button from '../../../components/form/Button';

const Service = () => {
  const service_data = [
    {
      name: "Skin",
      services: [
        "Facial",
        "D-tan",
        "Threading",
        "Shaving",
        "Manicure",
        "Pedicure",
      ],
    },
    {
      name: "Hair",
      services: [
        "Hair cut",
        "Hair style",
        "Hair spa",
        "Hair color",
        "Blow dry",
        "Hair treatment",
      ],
    },
    {
      name: "Makeup",
      services: ["Groom makeup", "Basic makeup", "H.D makeup"],
    },
  ];

  const init_values = service_data.map(srvs => ([[srvs.name], []]));

  const handleBookAppointment = (services) => {
    const selectedTypes = Object.keys(services).filter(k => services[k].length > 0);

    if(selectedTypes.length > 0) {
      toast.success("Appointment api not available");
    }else {
      toast.error("Select any one service");
    }
  }

  return (
    <>
      <section className="flex items-center flex-col justify-around h-screen-70 max-h-521 w-full bg-blog-back bg-center bg-cover">
        <span></span>
        <h2 className="font-semibold drop-shadow-page-header leading-10 text-4xl text-orange-500">
          SERVICES
        </h2>
      </section>
      <section>
        <Formik
          initialValues={Object.fromEntries(init_values)}
          onSubmit={handleBookAppointment}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="flex items-center flex-col gap-36 py-20 px-5 xs:px-12 lg:p-36" >
              {service_data.map((service) => (
                <div className="grid sm:grid-cols-2 lg:grid-cols-40-60 xl:grid-cols-30-70 overflow-hidden w-full shadow-service-shadow rounded-xl bg-salon-card-back lg:max-w-6xl" key={service.name}>
                  <div className="w-full h-full min-h-screen-40 relative rounded-xl overflow-hidden">
                    <Image src={ServiceDemo} layout="fill" objectFit='cover' alt="service card" />
                  </div>
                  <div className="flex flex-col gap-10 sm:gap-20 p-5 sm:p-11 justify-between items-center w-full">
                    <div className="">
                      <p className='font-semibold drop-shadow-salon-card-header leading-8 text-3xl text-orange-500'>{service.name}</p>
                    </div>
                    <div className="flex flex-wrap gap-5 lg:grid w-full xl:w-max md:grid-cols-2 sm:overflow-x-visible sm:overflow-y-auto sm:max-h-60 lg:overflow-visible xl:grid-flow-col xl:grid-cols-none xl:grid-rows-2 justify-between md:gap-x-10 xl:gap-x-16 sm:gap-y-11">
                      {service?.services.map((sub) => (
                        <div key={sub} className="w-full">
                          <input
                            type="checkbox"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name={service.name}
                            value={sub}
                            id={sub}
                            className="hidden"
                          />
                          <label className={`${values[service.name].includes(sub) && "bg-orange-500 text-white" } border xs:min-w-150 font-normal text-xl lg:text-xl xl:text-2xl leading-6 py-3 w-full border-solid border-orange-500 rounded-md truncate block px-4 text-center`} for={sub}>{sub}
                          </label>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-center w-max">
                      <Button className="py-3 px-8">
                        <p className='text-sm sm:text-base md:text-xl leading-5'>Book an appointment</p>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              </div>
            </Form>
          )}
        </Formik>
      </section>
    </>
  );
}

export default Service;
