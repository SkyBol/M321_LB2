import { Typography } from "@mui/material";

interface AbstractCardTitleProps {
    name ?: string;
    children ?: any;
}

const AbstractCardTitle = ({ name, children } : AbstractCardTitleProps) => {
    return (
        <Typography variant="h4" component="div" >
            {name ?? ""}{children ?? ""}
        </Typography>
    )
}

export default AbstractCardTitle;