import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from "react";
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik";


function App() {
    const REGEX = {
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("không được để trống"),
        email: Yup.string()
            .matches(REGEX.email, "email phải đúng định dạng")
            .required("không được để trống"),
        phone: Yup.string().required("không được để trống"),
    });


    return (
        <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-xl mt-10">
            <h1 className="text-xl font-bold mb-4">Contact Form</h1>

            <Formik
                initialValues={{ name: "", email: "", phone: "" }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    alert("Add contact successfully!!!");
                    resetForm();
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        {/* Name */}
                        <div
                            className={`custom-input ${
                                errors.name && touched.name ? "custom-input-error" : ""
                            }`}
                        >
                            <label htmlFor="name">Name</label>
                            <Field id="name" name="name" />
                            <ErrorMessage
                                name="name"
                                component="p"
                                className="error"
                            />
                        </div>

                        <div
                            className={`custom-input ${
                                errors.email && touched.email ? "custom-input-error" : ""
                            }`}
                        >
                            <label htmlFor="email">Email</label>
                            <Field id="email" name="email" />
                            <ErrorMessage
                                name="email"
                                component="p"
                                className="error"
                            />
                        </div>

                        <div
                            className={`custom-input ${
                                errors.phone && touched.phone ? "custom-input-error" : ""
                            }`}
                        >
                            <label htmlFor="phone">Phone</label>
                            <Field id="phone" name="phone" />
                            <ErrorMessage
                                name="phone"
                                component="p"
                                className="error"
                            />
                        </div>

                        <button
                            type="submit"
                            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
                        >
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default App
