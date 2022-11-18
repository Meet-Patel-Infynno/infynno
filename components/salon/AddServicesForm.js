import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import Button from "../form/Button";
import toast from "react-hot-toast";

const AddServicesForm = ({handleAddServices, allServices, selectedServices}) => {
  const initialServices = {
    services_id: selectedServices || []
  }

  const handleAddServiceSubmit = (val) => {
    if(val.services_id.length > 0) {
      handleAddServices(val);
    }else {
      toast.error("Please select any one service.");
    }
  }

  const handleSelectService = (e, values, setValues) => {
    setValues({
      ...values,
      services_id: values.services_id.includes(Number(e.target.value))
        ? values.services_id.filter(
            (service) => Number(service) !== Number(e.target.value)
          )
        : [...values.services_id, Number(e.target.value)],
    });
  }

  return (
    <>
      <div className="w-full text-center mb-10">
        <p className="text-3xl">Add Service</p>
      </div>
      <Formik
        enableReinitialize
        initialValues={initialServices}
        onSubmit={handleAddServiceSubmit}
      >
        {({ values, setValues, errors }) => (
          <Form >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
            {allServices?.map((service) => (
              <div key={service?.id} className="flex flex-row gap-3 items-center">
                <Field
                  name="services_id"
                  checked={values?.services_id.includes(service.id)}
                  onChange={(e) => handleSelectService(e, values, setValues)}
                  id={service.service_name}
                  type="checkbox"
                  value={service.id}
                />
                <label htmlFor={service.service_name}>{service.service_name} </label>
              </div>
            ))}
            </div>
            <ErrorMessage name="services_id">{errors.services_id}</ErrorMessage>
            <Button className="py-2 max-w-sm mx-auto mt-6 h-max" type="submit">
              Add Service
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddServicesForm;
