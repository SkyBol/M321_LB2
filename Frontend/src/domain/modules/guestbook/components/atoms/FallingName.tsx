import { useEffect, useState } from "react";
import GuestbookEntry from "../../models/GuestbookEntry.model";
import FallingNameElementProperty from "../../models/FallingNameElementProperty";
import { styled } from "@mui/material";

type FallingNameProps = {
    entry: GuestbookEntry;
    properties: FallingNameElementProperty;
}

const FallingNameWrapper = styled('div')(() => ({
    position: 'relative',
    margin: 0,
    padding: 0,
    width: 'fit-content',
    height: 'fit-content',

    "@keyframes fall": {
        "0%": {
            opacity: 0,
            top: "-10%",
            //"-webkit-transform": "translateX(20px) rotate(0deg)",
            transform: "translateX(20px) rotate(0deg)",
        },
        "20%": {
            //"-webkit-transform": "translateX(-20px) rotate(45deg)",
            transform: "translateX(-20px) rotate(45deg)",
        },
        "40%": {
            //"-webkit-transform": "translateX(-20px) rotate(90deg)",
            transform: "translateX(-20px) rotate(90deg)",
        },
        "50%": {
            opacity: 1,
        },
        "60%": {
            //"-webkit-transform": "translateX(20px) rotate(180deg)",
            transform: "translateX(20px) rotate(180deg)",
        },
        "80%": {
            //"-webkit-transform": "translateX(-20px) rotate(180deg)",
            transform: "translateX(-20px) rotate(180deg)",
        },
        "100%": {
            opacity: 0,
            top: "110%",
            //"-webkit-transform": "translateX(-20px) rotate(225deg)",
            transform: "translateX(-20px) rotate(225deg)",
        }

    },
    animation: "fall 5s infinite linear"
}));

const FallingName = ({ entry, properties } : FallingNameProps) => {
    const [xPos, setXPos] = useState<number>(0);

    useEffect(() => {
        setXPos(Math.random() * 1000)
    }, [])

    return (
        <FallingNameWrapper
            className="falling"
            id={entry.id}
            style={{
                left: xPos,
                animationDelay: properties.animationDelay + 's'
            }}
        >
            { entry.name }
        </FallingNameWrapper>
    );
}

export default FallingName;