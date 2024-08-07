"use client";

import * as yup from "yup";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
import { Formik, Form, Field } from "formik";
import FormInput from "./FormInput.jsx";
import { motion } from "framer-motion";

// TODO: Probably no longer required, check `CreatorForm` "other" fields
export const validateOtherField = (value) => (value === "" ? "Required" : "");

export const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Email address is invalid")
    .required("Email address is required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is invalid")
    .required("Phone number is required"),
  companyName: yup.string().required("Company name is required"),
  companySize: yup.string().required("Company size is required"),
  industry: yup.string().required("Industry is required"),
  monthlyInfluencerBudget: yup
    .number()
    // We assume there is no need for fractional budgets
    .integer("Must be an integer")
    .min(1, "Must be positive")
    // Set a maximum of 2 billion because:
    // * the client did not specify a desired maximum
    // * we want it to fit in an `Int`, and `2**32 - 1` is more than enough
    // * it is a "nice" number
    .max(2_000_000_000, "Too high")
    .required("Monthly influencer budget is required"),
});

export const BrandForm = ({ color, image }) => {
  const [loading, setLoading] = useState();

  const onSubmit = async (value, resetForm) => {
    setLoading(true);
    await fetch("/api/submit-brand", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(value),
    })
      .then((res) => res.json())
      .then((val) => {
        if (val.message) {
          toast.success(val.message);
        } else {
          toast.error(val.error);
        }
        setLoading(false);
        resetForm();
      })
      .catch((err) => alert(JSON.stringify(err)))
      .finally(() => setLoading(false));
  };

  return (
    <section className="flex items-center justify-center">
      <div className="basis-1/2 hidden lg:block">
        <Image
          src={image}
          alt=""
          width={400}
          height={400}
          className="rounded-lg mx-auto xl:w-[600px]"
        />
      </div>
      <div className="flex flex-col gap-5 xl:basis-1/2 text-[#F4F4F4]">
        <h2
          className="md:text-[7rem] text-6xl font-aileron md:-tracking-[.5rem] text-pretty max-w-[30rem]"
          style={{
            lineHeight: 0.75,
          }}
        >
          power up <span className="font-times">your</span>{" "}
          <span className="font-times italic -tracking-[.5rem]">marketing</span>
        </h2>
        <div className="flex flex-col gap-6">
          <p className="text-xl font-bold -tracking-[.05rem]">
            Want to power up your marketing? Register your interest with us and
            a representative will get back to you soonest.
          </p>
          <Formik
            initialValues={{
              name: "",
              email: "",
              phoneNumber: "",
              companyName: "",
              companySize: "",
              industry: "",
              otherIndustry: "",
              monthlyInfluencerBudget: "",
            }}
            onSubmit={(values, { resetForm }) => onSubmit(values, resetForm)}
            validationSchema={schema}
          >
            <Form>
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <Field name="name">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        label="Name"
                        type="text"
                        placeholder="What’s your name?"
                        field={field}
                        color={color}
                        errors={touched.name && errors.name}
                      />
                    </>
                  )}
                </Field>
                <Field name="email">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        label="Email Address"
                        type="email"
                        placeholder="What’s your email address?"
                        field={field}
                        color={color}
                        errors={touched.email && errors.email}
                      />
                    </>
                  )}
                </Field>
                <Field name="phoneNumber">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        label="Phone Number"
                        type="text"
                        placeholder="What’s your phone number?"
                        field={field}
                        color={color}
                        errors={touched.phoneNumber && errors.phoneNumber}
                      />
                    </>
                  )}
                </Field>
                <Field name="companyName">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        label="Company Name"
                        type="text"
                        placeholder="What’s your company name?"
                        field={field}
                        color={color}
                        errors={touched.companyName && errors.companyName}
                      />
                    </>
                  )}
                </Field>
                <div className="sm:col-span-3">
                  <Field name="companySize">
                    {({ field, form: { errors, touched } }) => (
                      <>
                        <label
                          htmlFor="companySize"
                          className="block text-sm font-medium leading-6"
                        >
                          Company Size
                        </label>
                        <div className="mt-2">
                          <select
                            name="companySize"
                            {...field}
                            className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                              errors.companySize &&
                              touched.companySize &&
                              "border-red-500"
                            }`}
                          >
                            <option value="">Select one...</option>
                            <option>1 to 10</option>
                            <option>11 to 50</option>
                            <option>51 to 100</option>
                            <option>101 to 200</option>
                            <option>Over 200</option>
                          </select>
                        </div>
                        {errors.companySize && touched.companySize && (
                          <p class="text-red-500 text-xs mx-2 my-1">
                            {errors.companySize}
                          </p>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <div className="sm:col-span-3">
                  <Field name="industry">
                    {({ field, form: { errors, touched } }) => (
                      <>
                        <label
                          htmlFor="industry"
                          className="block text-sm font-medium leading-6"
                        >
                          Industry
                        </label>
                        <div className="mt-2">
                          <select
                            name="industry"
                            {...field}
                            className={`block w-full rounded-full border-2 py-2 px-4 shadow-sm placeholder:text-gray-400 focus:outline-none sm:text-sm sm:leading-6 bg-[${color}] ${
                              errors.industry &&
                              touched.industry &&
                              "border-red-500"
                            }`}
                          >
                            <option value="">Select one...</option>
                            <option>Banking and Finance</option>
                            <option>Beauty</option>
                            <option>Lifestyle</option>
                            <option>Health and Wellness</option>
                            <option>F&B</option>
                            <option>Fashion</option>
                            <option>Charities and NGOs</option>
                            <option>Education</option>
                            <option>Events</option>
                            <option>Motherhood and Family</option>
                            <option>Hotel and Travel</option>
                            <option>Jewellery</option>
                            <option>Footwear</option>
                            <option>Art</option>
                            <option>Technology</option>
                            <option>Others</option>
                          </select>
                        </div>
                        {errors.industry && touched.industry && (
                          <p class="text-red-500 text-xs mx-2 my-1">
                            {errors.industry}
                          </p>
                        )}
                        {field.value.includes("Others") && (
                          <Field
                            name="otherIndustry"
                            validate={(value) =>
                              value === "" ? "Industry is required" : ""
                            }
                          >
                            {({ field, form: { errors, touched } }) => (
                              <>
                                <FormInput
                                  placeholder="Please specify..."
                                  type="text"
                                  {...field}
                                  color={color}
                                  errors={
                                    touched.otherIndustry &&
                                    errors.otherIndustry
                                  }
                                />
                              </>
                            )}
                          </Field>
                        )}
                      </>
                    )}
                  </Field>
                </div>
                <Field name="monthlyInfluencerBudget">
                  {({ field, form: { errors, touched } }) => (
                    <>
                      <FormInput
                        label="Monthly Influencer Budget (RM)"
                        type="number"
                        placeholder="What’s your monthly influencer budget?"
                        field={field}
                        color={color}
                        errors={
                          touched.monthlyInfluencerBudget &&
                          errors.monthlyInfluencerBudget
                        }
                      />
                    </>
                  )}
                </Field>
                <div className="text-end sm:col-span-3 mr-auto mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.8 }}
                    type="submit"
                    disabled={loading}
                    className={`${loading ? "bg-slate-300" : "bg-slate-100 "}
                  py-2 px-12 rounded-full text-[${color}] font-aileron uppercase inline-flex items-center gap-5 font-bold`}
                  >
                    {loading ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="2em"
                        height="2em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          stroke-dasharray="15"
                          stroke-dashoffset="15"
                          stroke-linecap="round"
                          stroke-width="2"
                          d="M12 3C16.9706 3 21 7.02944 21 12"
                        >
                          <animate
                            fill="freeze"
                            attributeName="stroke-dashoffset"
                            dur="0.3s"
                            values="15;0"
                          />
                          <animateTransform
                            attributeName="transform"
                            dur="1.5s"
                            repeatCount="indefinite"
                            type="rotate"
                            values="0 12 12;360 12 12"
                          />
                        </path>
                      </svg>
                    ) : (
                      "Submit"
                    )}
                  </motion.button>
                </div>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};
