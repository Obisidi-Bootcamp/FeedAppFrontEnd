import React, { useEffect, useState } from "react";
import "./addressprofile.css";
import * as Yup from "yup";

import { Formik, Form } from "formik";

import LoadingIndicator from "../loadingIndicator/LoadingIndicator";
import FormField from "../formField/FormField";

const AddressProfile = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  useEffect(() => {
    loadAddressProfile();
  }, []);

  const loadAddressProfile = () => {
    //load address api code goes here
  };

  const onFormSubmit = (values) => {
    //save address api code goes here
    console.log(values);
  };

  if (isLoading) {
    return <LoadingIndicator fullPage />;
  }

  const AddressProfileSchema = Yup.object().shape({
    address: Yup.string().required("Required"),
    state: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
    pinCode: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        address: address,
        state: state,
        city: city,
        country: country,
        pinCode: pinCode,
      }}
      validationSchema={AddressProfileSchema}
      onSubmit={onFormSubmit}
    >
      {() => (
        <Form>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <FormField label="Address" name="address" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="Province" name="state" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="City" name="city" type="text" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3">
                <FormField label="Country" name="country" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="PIN Code" name="pinCode" type="text" />
              </div>
            </div>

            <div className="w-full mt-5 ">
              <button className="block uppercase mx-auto shadow bg-indigo-500 hover:bg-indigo-700 focus:shadow-outline focus:outline-none text-white text-xs py-3 px-10 rounded font-bold">
                Save
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddressProfile;