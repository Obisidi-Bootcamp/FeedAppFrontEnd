import React, { useState } from "react";
import "./addpost.css";
import * as Yup from "yup";

import { Formik, Form, useField } from "formik";

import FormField from "../formField/FormField";

const AddPost = () => {
  const [isFetching, setIsFetching] = useState(false);

  const onFormSubmit = (values) => {
    //add post api code goes here
    console.log(values);
  };

  const AddPostSchema = Yup.object().shape({
    post: Yup.string().required("Required"),
    postImageUrl: Yup.string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .required("Required"),
  });

  const FormTextArea = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
      <>
        <label
          className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-first-name"
        >
          {label}
        </label>
        <textarea
          {...field}
          {...props}
          className="block mx-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
        />
        {meta.touched && meta.error ? (
          <p className="text-red-600 text-xs italic">{meta.error}</p>
        ) : null}
      </>
    );
  };

  return (
    <>
      <Formik
        initialValues={{
          post: "",
          postImageUrl: "",
        }}
        validationSchema={AddPostSchema}
        onSubmit={onFormSubmit}
      >
        {() => (
          <Form>
            <div className="w-full mt-10  px-20">
              <div class="mx-5 rounded-xl border-1  bg-white shadow-2xl">
                <div className="flex flex-col items-center  rounded-lg p-10">
                  <FormField
                    label=""
                    name="postImageUrl"
                    type="text"
                    placeholder="Enter Post Image URL"
                  />
                  <div className="py-2"></div>

                  <FormTextArea
                    label=""
                    name="post"
                    type="text"
                    rows="5"
                    placeholder="What's in your mind?"
                  />
                  <button
                    type="submit"
                    className="mt-4 inline-flex justify-center p-2 text-blue-600 rounded-full cursor-pointer bg-blue-100 px-5 hover:bg-[#fafafa]"
                  >
                    <svg
                      className="w-6 h-6 rotate-90 mx-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                    </svg>
                    Add Post
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default AddPost;