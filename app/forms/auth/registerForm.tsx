import {withFormik} from "formik";
import * as yup from 'yup';

import {RegisterFormValuesInterface} from "@/app/contracts/auth";
import InnerRegisterForm from "@/app/components/auth/innerRegisterForm";
import callApi from "@/app/helpers/callApi";
import ValidationError from "@/app/exceptions/validationError";
import Router from "next/router";

const RegisterFormValidationSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required().length(8),
    password_confirmation: yup.string().required().length(8),
})

interface RegisterFormProps {
    setToken: (token: string) => void
}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>({
    mapPropsToValues: props => ({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    }),
    validationSchema: RegisterFormValidationSchema,
    handleSubmit: async (values, {props, setFieldError}) => {
        try {
            const res = await callApi().post('/register', values);
            if (res.status === 200) {
                props.setToken(res.data.data.token);
                await Router.push('/panel');
            }
        } catch (error) {
            if (error instanceof ValidationError) {
                Object.entries(error.messages).forEach(([key, value]) => setFieldError(key, value as string))
            }
        }
    }
})(InnerRegisterForm)

export default RegisterForm