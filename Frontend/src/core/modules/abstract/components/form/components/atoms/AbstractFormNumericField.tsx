import { FormikProps } from "formik";
import { TextField as TextFieldMui } from '@mui/material';
import React from 'react';

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

const AbstractFormNumericField = ({ formik, id, placeholder, fullWidth, required, autoFocus, disabled, type }: AbstractTextFieldParams) => {
    if (!formik) {
        throw new Error("formik has to be defined");
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;

        
        if (/^-?\d*\.?\d*$/.test(value) || value === '') {
            formik.handleChange(event);
        }
    };

    return (
        <TextFieldMui
            label={id}
            id={id}
            placeholder={"1" ?? ""}
            fullWidth={fullWidth}
            required={required}
            autoFocus={autoFocus}
            onChange={handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[id]}
            disabled={disabled}
            error={Boolean(formik.errors[id])}
            helperText={String(formik.errors[id] ?? "")}
            type={type}
            inputProps={{
                inputMode: 'numeric',
                pattern: '[ +][0-9]*[.,]?[0-9]+',
            }}
            
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

export default AbstractFormNumericField;
