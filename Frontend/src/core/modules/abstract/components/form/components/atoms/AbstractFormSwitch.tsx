import { Switch } from "@mui/material";
import { FormikProps } from "formik";

interface AbstractFormSwitchProps {
    formik ?: FormikProps<any>;
    id : string;
    disabled ?: boolean;
}

const AbstractFormSwitch = ({ formik, id, disabled } : AbstractFormSwitchProps) => {
    if (formik === undefined) {
        throw new Error("formik has to be defined");
    }
    
    return (
        <Switch
            id={id}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
            disabled={disabled}
        />
    )
}

export default AbstractFormSwitch;