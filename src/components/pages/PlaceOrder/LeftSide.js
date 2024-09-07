import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input, Typography } from "@material-tailwind/react";

// Yup validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  street: Yup.string().required("Street is required"),
  zipcode: Yup.string().required("Zipcode is required"),
  country: Yup.string().required("Country is required"),
  city: Yup.string().required("City is required"),
  phone: Yup.string().required("Phone is required"),
});

export default function LeftSide({ setformValue, setSubmitForm }) {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      street: "",
      zipcode: "",
      country: "",
      city: "",
      state: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setformValue([values]);
    },
    validateOnMount: true,
  });

  // // Pass the Formik submit function to the parent
  useEffect(() => {
    setSubmitForm(formik.handleSubmit);
  }, [setSubmitForm, formik.handleSubmit]);
  console.log("formik errors", formik.errors);
  return (
    <form
      className="mt-8 mb-2 w-full max-w-screen-lg"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          <Input
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            error={
              formik.touched.firstName && formik.errors.firstName ? true : false
            }
            placeholder={
              formik.touched.firstName && formik.errors.firstName
                ? formik.errors.firstName
                : "First Name"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.firstName && formik.errors.firstName
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />

          <Input
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
            // onBlur={formik.handleBlur}
            error={
              formik.touched.lastName && formik.errors.lastName ? true : false
            }
            placeholder={
              formik.touched.lastName && formik.errors.lastName
                ? formik.errors.lastName
                : "Last Name"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.lastName && formik.errors.lastName
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div>
          <Input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && formik.errors.email ? true : false}
            placeholder={
              formik.touched.email && formik.errors.email
                ? formik.errors.email
                : "Email"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.email && formik.errors.email
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="flex gap-3">
          <Input
            type="text"
            name="street"
            value={formik.values.street}
            onChange={formik.handleChange}
            error={formik.touched.street && formik.errors.street ? true : false}
            placeholder={
              formik.touched.street && formik.errors.street
                ? formik.errors.street
                : "Stree"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.street && formik.errors.street
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="flex gap-3">
          <Input
            type="text"
            name="zipcode"
            value={formik.values.zipcode}
            onChange={formik.handleChange}
            error={
              formik.touched.zipcode && formik.errors.zipcode ? true : false
            }
            placeholder={
              formik.touched.zipcode && formik.errors.zipcode
                ? formik.errors.zipcode
                : "Zipcode"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.zipcode && formik.errors.zipcode
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            type="text"
            name="country"
            value={formik.values.country}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.country && formik.errors.country ? true : false
            }
            placeholder={
              formik.touched.country && formik.errors.country
                ? formik.errors.country
                : "Country"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.country && formik.errors.country
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div className="flex gap-3">
          <Input
            type="text"
            name="city"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && formik.errors.city ? true : false}
            placeholder={
              formik.touched.city && formik.errors.city
                ? formik.errors.city
                : "City"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.city && formik.errors.city
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />
          <Input
            type="text"
            name="state"
            placeholder="State"
            value={formik.values.state}
            onChange={formik.handleChange}
            className="!border !border-gray-300 bg-white text-gray-900 shadow-lg w-full"
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
        <div>
          <Input
            type="text"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && formik.errors.phone ? true : false}
            placeholder={
              formik.touched.phone && formik.errors.phone
                ? formik.errors.phone
                : "Phone"
            }
            className={`!border bg-white text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 placeholder:opacity-100 placeholder:!font-jost placeholder:!text-base focus:!border-gray-900 focus:!ring-gray-900/10 w-full ${
              formik.touched.phone && formik.errors.phone
                ? "!border-red-500"
                : "focus:!border-gray-900"
            }`}
            labelProps={{
              className: "hidden",
            }}
          />
        </div>
      </div>
    </form>
  );
}
