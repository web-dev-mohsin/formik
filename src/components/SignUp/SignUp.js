import { Formik } from 'formik';
import * as yup from 'yup';
import React from 'react';
import { useFormik } from 'formik';

const SignUp = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validationSchema: yup.object({
            name: yup.string().min(2, "Name must be 2 character").required(),
            email: yup.string().email().required(),
            password: yup.string().min(6, "Password must be 6 character").required()


        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm({ values: "" })
        }
    })
    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        className="form-control" placeholder="Mohsin" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input
                        type="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        className="form-control" placeholder="name@example.com" />
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        className="form-control" placeholder="name@example.com" />
                </div>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
};

export default SignUp;