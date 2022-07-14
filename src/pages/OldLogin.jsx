import React from "react";
import { useFormik } from 'formik';
import '../components/login/Login.css';
import * as Yup from 'yup';
function Login(){

    const initialValues={
        email: '',
        password: ''
    }
    const onSubmit = values => {
        alert(JSON.stringify(values, null, 2));
    }
    const validate = values => {
        const errors = {};
        if (!values.email) {
            errors.email = "POR FAVOR INGRESA UN EMAIL VALIDO";
        }
        if (!values.password) {
            errors.password = "POR FAVOR INGRESA UN PASSWORD VALIDO";
        }
        return errors;
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('El formato ingresado es incorrecto').required('Ingrese el email'),
        password: Yup.string().min(6, 'El password minimamente debe ser de 6 caracteres').required('Ingrese su contraseña')
    });
    const formik = useFormik({
        initialValues,
        onSubmit,
        //validate,
        validationSchema,
    });
    console.log("asdsa",formik.errors);
    return (
        <form onSubmit={formik.handleSubmit} id="login" className="container">
            <div id="login-container" className="d-flex flex-column">
                <h3 className="text-white py-2">INICIO DE SESIÓN</h3>
                <label htmlFor="email" className="text-white">Correo electrónico</label>
                    <input
                    id="email"
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    className="form-control my-2"
                />
                <span className="text-info mb-2">{formik.errors.email}</span>
                <label htmlFor="password" className="text-white">Password</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    className="form-control my-2"
                />
                <span className="text-info mb-2">{formik.errors.password}</span>
                <button type="submit" className="btn btn-danger">ACEPTAR</button>
            </div>
        </form>
   );
}
export default Login;