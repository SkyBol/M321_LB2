import { FormikProps } from "formik";
import AbstractFormButton from "../../../../abstract/components/form/components/atoms/AbstractFormButton";
import AbstractFormTextField from "../../../../abstract/components/form/components/atoms/AbstractFormTextField";
import AbstractForm from "../../../../abstract/components/form/components/molecules/AbstractForm";

interface LoginFormProps {
    formik: FormikProps<any>;
}

const LoginForm = ({ formik } : LoginFormProps) => {
    return (
        <AbstractForm formik={formik}>
            <AbstractFormTextField
                id='email'
                placeholder='Enter username'
                fullWidth
                required
                autoFocus
            />
            <AbstractFormTextField
                id='password'
                placeholder='Enter password'
                fullWidth
                required
                type='password'
            />
            <AbstractFormButton fullwidth>
                Sign in
            </AbstractFormButton>
        </AbstractForm>
    )
}

export default LoginForm;