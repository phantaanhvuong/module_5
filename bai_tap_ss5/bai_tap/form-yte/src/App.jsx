import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./App.css";

function App() {
    const SEX_LIST = [
        { label: "Nam", value: "male" },
        { label: "Nữ", value: "female" },
    ];

    const validationSchema = Yup.object({
        name: Yup.string().required("không được để trống"),
        passport: Yup.string().required("không được để trống"),
        year: Yup.number()
            .typeError("Year must be a number")
            .required("không được để trống")
            .moreThan(1900, "Year must be greater than 1900"),
        nationality: Yup.string().required("không được để trống"),
        province: Yup.string().required("không được để trống"),
        district: Yup.string().required(""),
        ward: Yup.string().required("không được để trống"),
        address: Yup.string().required("không được để trống"),
        phone: Yup.string().required("không được để trống"),
        email: Yup.string()
            .required("không được để trống")
            .email("Invalid email address"),
    });

    return (
        <div className="container">
            <h2>Khai báo y tế</h2>

            <Formik
                initialValues={{
                    name: "",
                    passport: "",
                    year: "",
                    gender: "",
                    nationality: "",
                    company: "",
                    department: "",
                    insurance: false,
                    province: "",
                    district: "",
                    ward: "",
                    address: "",
                    phone: "",
                    email: "",
                    screening: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values) => {
                    alert("Khai báo thành công!");
                    console.log("Form Data:", values);
                }}
            >
                <Form>
                    <label>Họ tên</label>
                    <Field name="name" />
                    <ErrorMessage name="name" component="div" className="error" />

                    <label>Số hộ chiếu / CMND</label>
                    <Field name="passport" />
                    <ErrorMessage name="passport" component="div" className="error" />

                    <label>Năm sinh</label>
                    <Field name="year" type="number" />
                    <ErrorMessage name="year" component="div" className="error" />

                    <label>Giới tính</label>
                    <Field as="select" name="gender">
                        <option value="">-- Chọn giới tính --</option>
                        {SEX_LIST.map((s) => (
                            <option key={s.value} value={s.value}>
                                {s.label}
                            </option>
                        ))}
                    </Field>

                    <label>Quốc tịch</label>
                    <Field name="nationality" />
                    <ErrorMessage name="nationality" component="div" className="error" />

                    <label>Công ty làm việc</label>
                    <Field name="company" />

                    <label>Bộ phận làm việc</label>
                    <Field name="department" />

                    <label>
                        Có thẻ bảo hiểm y tế<Field type="checkbox" name="insurance" />
                    </label>

                    <label>Tỉnh thành</label>
                    <Field name="province" />
                    <ErrorMessage name="province" component="div" className="error" />

                    <label>Quận / huyện</label>
                    <Field name="district" />
                    <ErrorMessage name="district" component="div" className="error" />

                    <label>Phường / xã</label>
                    <Field name="ward" />
                    <ErrorMessage name="ward" component="div" className="error" />

                    <label>Số nhà, phố, tổ dân phố / thôn / đội</label>
                    <Field name="address" />
                    <ErrorMessage name="address" component="div" className="error" />

                    <label>Điện thoại</label>
                    <Field name="phone" />
                    <ErrorMessage name="phone" component="div" className="error" />

                    <label>Email</label>
                    <Field name="email" />
                    <ErrorMessage name="email" component="div" className="error" />

                    <label>Thông tin sàng lọc (không bắt buộc)</label>
                    <Field as="textarea" name="screening" />

                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
}

export default App;
