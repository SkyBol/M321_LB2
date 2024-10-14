import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { countryList } from "../../../../../../../domain/modules/bootle/models/Countries.model.ts";

type AbstractDropDownParams = {
  id: string;
  options: { code: string; label: string }[];
  formik: any;
};

const AbstractFormDropDown = ({ id, options, formik }: AbstractDropDownParams) => {
  const handleOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: { code: string; label: string } | null
  ) => {
    formik.setFieldValue(id, value?.code || "");
  };

  const initialValue = countryList.find((ele) => ele.code === formik.values[id]) ;

  return (
    <Autocomplete
      id={id}
      options={options}
      autoHighlight
      value={initialValue} 
      getOptionLabel={(option) => option.label}
      renderOption={(props, option) => (
        <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
          <img
            loading="lazy"
            width="20"
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            alt=""
          />
          {option.label} ({option.code})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label={initialValue ? initialValue.label : "Choose a country"}
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", 
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
};

export default AbstractFormDropDown;
