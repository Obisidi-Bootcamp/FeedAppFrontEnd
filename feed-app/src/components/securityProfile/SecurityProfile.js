import React, { useEffect, useState } from "react";
import "./securityprofile.css";
import * as Yup from "yup";

import { Formik, Form } from "formik";

import LoadingIndicator from "../loadingIndicator/LoadingIndicator";
import FormField from "../formField/FormField";

const SecurityProfile = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [securityQuestion1, setSecurityQuestion1] = useState("");
  const [securityAnswer1, setSecurityAnswer1] = useState("");
  const [securityQuestion2, setSecurityQuestion2] = useState("");
  const [securityAnswer2, setSecurityAnswer2] = useState("");
  const [securityQuestion3, setSecurityQuestion3] = useState("");
  const [securityAnswer3, setSecurityAnswer3] = useState("");

  useEffect(() => {
    loadSecurityProfile();
  }, []);

  const loadSecurityProfile = () => {
    //load security api code goes here
  };

  const onFormSubmit = (values) => {
    //save security api code goes here
    console.log(values);
  };

  if (isLoading) {
    return <LoadingIndicator fullPage />;
  }

  const SecurityProfileSchema = Yup.object().shape({
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      )
      .required("Required"),
    phoneNumber: Yup.number().required("Required"),
    securityQuestion1: Yup.string().required("Required"),
    securityAnswer1: Yup.string().required("Required"),
    securityQuestion2: Yup.string().required("Required"),
    securityAnswer2: Yup.string().required("Required"),
    securityQuestion3: Yup.string().required("Required"),
    securityAnswer3: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        password: password,
        phoneNumber: phoneNumber,
        securityQuestion1: securityQuestion1,
        securityAnswer1: securityAnswer1,
        securityQuestion2: securityQuestion2,
        securityAnswer2: securityAnswer2,
        securityQuestion3: securityQuestion3,
        securityAnswer3: securityAnswer3,
      }}
      validationSchema={SecurityProfileSchema}
      onSubmit={onFormSubmit}
    >
      {() => (
        <Form>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <FormField label="Password" name="password" type="password" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Phone Number"
                  name="phoneNumber"
                  type="text"
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Security Question 1"
                  name="securityQuestion1"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Security Answer 1"
                  name="securityAnswer1"
                  type="text"
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Security Question 2"
                  name="securityQuestion2"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Security Answer 2"
                  name="securityAnswer2"
                  type="text"
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Security Question 3"
                  name="securityQuestion3"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Security Answer 3"
                  name="securityAnswer3"
                  type="text"
                />
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

export default SecurityProfile;