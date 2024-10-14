import { Typography } from "@mui/material";

interface AbstractCardTypeProps {
    type ?: string;
    country ?: string;
    children ?: any;
}

const AbstractCardType = ({ type,country, children } : AbstractCardTypeProps) => {
    return (
        <Typography variant="h5" component="div">
            <img src={`https://flagcdn.com/w20/${country?.toLowerCase()}.png`} alt={"picture of the bottle"}
                 style={{width: 25, height: 20 ,paddingRight:5}}/>
            {type ?? ""}{children ?? ""}
        </Typography>
    )
}

export default AbstractCardType;