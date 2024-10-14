import { FormikProps } from "formik";
import { TextField as TextFieldMui } from '@mui/material';

type AbstractTextFieldParams = {
    formik?: FormikProps<any>;
    id: string;
    placeholder?: string;
    fullWidth?: boolean;
    required?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    type?: string;
}

const AbstractFormTextField = ({ formik, id, placeholder, fullWidth, required, autoFocus, disabled, type }: AbstractTextFieldParams) => {
    if (formik === undefined) {
        throw new Error("formik has to be defined");
    }

    return (
        <TextFieldMui
            label={id}
            id={id}
            placeholder={placeholder ?? ""}
            fullWidth={fullWidth}
            required={required}
            autoFocus={autoFocus}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
            disabled={disabled}
            error={Boolean(formik.errors[id])}
            helperText={String(formik.errors[id] ?? "")}
            type={type}
            sx={{
                "& .MuiOutlinedInput-root": {
                  color: "#000",
                  fontFamily: "Arial",
                  
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#5c5c5c",
                   
                  },
                  "&.Mui-focused": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#D4AF37",
                      
                    },
                  },
                  "&:hover:not(.Mui-focused)": {
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "black",
                    },
                  },
                },
                "& .MuiInputLabel-outlined": {
                  color: "#393635",
                 
                  "&.Mui-focused": {
                    color: "#D4AF37",
                    
                  },
                },
              }}
        />
    );
}

export default AbstractFormTextField;
