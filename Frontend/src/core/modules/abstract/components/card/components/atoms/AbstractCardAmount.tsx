import { Typography } from "@mui/material";

interface AbstractCardAmountProps {
    amount ?: number;
}

const AbstractCardAmount = ({ amount} : AbstractCardAmountProps) => {
    return (
        <Typography variant="body1" component="div">
            Lager : {amount}
        </Typography>
    )
}

export default AbstractCardAmount;