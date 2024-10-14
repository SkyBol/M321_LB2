import { useFormik } from "formik";
import User from "../../../models/User.model";
import AbstractFormButton from "../../../../abstract/components/form/components/atoms/AbstractFormButton";
import AbstractForm from "../../../../abstract/components/form/components/molecules/AbstractForm";
import AbstractFormTextField from "../../../../abstract/components/form/components/atoms/AbstractFormTextField";

type UserFormParams = {
    user: User;
    submitActionHandler: (values: User) => void;
}
const UserForm = ({user, submitActionHandler} : UserFormParams) => {
    const formik = useFormik({
        initialValues: user,
        onSubmit: submitActionHandler,
        enableReinitialize: true,
    })

    return (
        <AbstractForm formik={formik}>
            <AbstractFormTextField id="email" />
            <AbstractFormTextField id="firstName" />
            <AbstractFormTextField id="lastName" />
            <AbstractFormButton>Save</AbstractFormButton>
        </AbstractForm>
    )
}

export default UserForm;