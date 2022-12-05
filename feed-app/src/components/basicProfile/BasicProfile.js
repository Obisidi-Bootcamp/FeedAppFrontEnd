import React, { useEffect, useState } from "react";
import "./basicprofile.css";
import * as Yup from "yup";

import { Formik, Form } from "formik";

import LoadingIndicator from "../loadingIndicator/LoadingIndicator";
import FormField from "../formField/FormField";

const BasicProfile = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");
  const [languages, setLanguages] = useState("");
  const [company, setCompany] = useState("");
  const [education, setEducation] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [certification, setCertification] = useState("");
  const [interests, setInterests] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  useEffect(() => {
    loadBasicProfile();
  }, []);

  const loadBasicProfile = () => {
    //load profile api code goes here
  };

  const onFormSubmit = (values) => {
    //save profile api code goes here
    console.log(values);
  };

  if (isLoading) {
    return <LoadingIndicator fullPage />;
  }

  const BasicProfileSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    position: Yup.string().required("Required"),
    languages: Yup.string().required("Required"),
    company: Yup.string().required("Required"),
    education: Yup.string().required("Required"),
    companyAddress: Yup.string().required("Required"),
    certification: Yup.string().required("Required"),
    interests: Yup.string().required("Required"),
    skills: Yup.string().required("Required"),
    experience: Yup.string().required("Required"),
  });

  return (
    <Formik
      initialValues={{
        name: name,
        email: email,
        position: position,
        languages: languages,
        company: company,
        education: education,
        companyAddress: companyAddress,
        certification: certification,
        interests: interests,
        skills: skills,
        experience: experience,
      }}
      validationSchema={BasicProfileSchema}
      onSubmit={onFormSubmit}
    >
      {() => (
        <Form>
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <FormField label="Name" name="name" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="Email" name="email" type="text" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <FormField label="Position" name="position" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="Languages" name="languages" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="Company" name="company" type="text" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <FormField label="Education" name="education" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Company Address"
                  name="companyAddress"
                  type="text"
                />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField
                  label="Certification"
                  name="certification"
                  type="text"
                />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <FormField label="Interests" name="interests" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="Skills" name="skills" type="text" />
              </div>
              <div className="md:w-1/2 px-3">
                <FormField label="Experience" name="experience" type="text" />
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

export default BasicProfile;