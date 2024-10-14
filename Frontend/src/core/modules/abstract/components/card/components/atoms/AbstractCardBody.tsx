import { Typography } from "@mui/material";

interface AbstractCardBodyProps {
    text ?: string;
    children ?: any;
}

const AbstractCardBody = ({ text, children } : AbstractCardBodyProps) => {
    return (
        <Typography variant="body2">
            {text ?? ""}{children ?? ""}
        </Typography>
    )
}

export default AbstractCardBody;