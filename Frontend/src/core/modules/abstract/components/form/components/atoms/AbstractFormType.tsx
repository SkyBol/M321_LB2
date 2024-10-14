import { Autocomplete, TextField } from "@mui/material";
import BottleType from "../../../../../../../domain/modules/bootle/models/BottleTypes.model.ts";


type AbstractTypeParams = {
    id: string;
    formik?: any;
    options?: any[];
    getOptionLabel?: (option: any) => string;
}

const AbstractFormType = ({ id, formik, options, getOptionLabel }: AbstractTypeParams) => {
    const handleOnChange = (event: React.ChangeEvent<{}>, value: string | null) => {
        formik.setFieldValue(id, value || '');
    };

    const initialValue = formik.values[id];

    const autocompleteOptions = options ? options : Object.values(BottleType);
    const autocompleteGetOptionLabel = getOptionLabel ? getOptionLabel : (option: any) => option;

    return (
        <Autocomplete
            id={id}
            options={autocompleteOptions}
            autoHighlight
            value={initialValue}
            getOptionLabel={autocompleteGetOptionLabel}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label={initialValue ? initialValue : "Choose a type"}
                    inputProps={{
                        ...params.inputProps,
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
            )}
            onChange={handleOnChange}
        />
    );
}

export default AbstractFormType;
