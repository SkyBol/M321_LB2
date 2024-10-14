import { Button } from "@mui/material";
import { FormikProps } from "formik";


type AbstractFormButtonParams = {
    formik ?: FormikProps<any>;
    fullwidth ?: boolean;
    children ?: any;
    disabled ?: boolean;
}

const AbstractFormButton = ({formik, fullwidth, children, disabled} : AbstractFormButtonParams) => {
    if (formik === undefined) {
        throw new Error("formik has to be defined");
    }

    return (
        <Button
            onClick={() => formik.handleSubmit()}
            style={{color:"lightgrey"}}
            sx={{
                backgroundColor: '#3e8e41',
                '&:hover': {
                  backgroundColor: '#06af41',
                },
              }}
            variant='contained'
            fullWidth={fullwidth}
            disabled={!formik.isValid || formik.isSubmitting || !formik.dirty || disabled}
        >
            {
                children ?? "Save"
            }
        </Button>
    )
}

export default AbstractFormButton;