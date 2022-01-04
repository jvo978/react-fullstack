import '../css/Registration.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

function Registration() {
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required(),
        password: Yup.string().min(4).max(20).required()
    })

    const onSubmit = (data) => {
        axios.post('http://localhost:3001/auth', data).then(response => {
            console.log(response.data)
        })
    }

    return (
        <div className="registration__container">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className="registration__form">
                    <label>Username: </label>
                        <ErrorMessage name="username" component="span" />
                        <Field className="inputRegistration" name="username" placeholder="Username" />
                    <label>Password: </label>
                        <ErrorMessage name="password" component="span" />
                        <Field className="inputRegistration" type="password" name="password" placeholder="Password" autoComplete="off" />
                        <button type="submit">Sign Up</button>
                </Form>
            </Formik>
        </div>
    )
}

export default Registration
