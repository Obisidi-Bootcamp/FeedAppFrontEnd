import React from "react";
import { useField } from "formik";

const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        for="grid-first-name"
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
      />
      {meta.touched && meta.error ? (
        <p className="text-red-600 text-xs italic">{meta.error}</p>
      ) : null}
    </>
  );
};

export default FormField;