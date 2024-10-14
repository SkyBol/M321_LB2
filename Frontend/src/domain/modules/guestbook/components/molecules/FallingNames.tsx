import { styled } from "@mui/material";
import FallingName from "../atoms/FallingName";

type FallingNamesProps = {
    children?: React.ReactNode | React.ReactNode[]; // TODO
    childrenInBack?: boolean; // TODO
}

const names = [
    {
        id: "test",
        name: "test",
    },
    {
        id: "test",
        name: "test",
    },
    {
        id: "test",
        name: "test",
    },
    {
        id: "test",
        name: "test",
    },
    {
        id: "test",
        name: "test",
    },
    {
        id: "test",
        name: "test",
    },
    {
        id: "test",
        name: "test",
    },
    {
        id: "test",
        name: "test",
    },
    
]

const Wrapper = styled('div')(() => ({
    position: 'relative',
    width: '100%',
    height: '100%',
    pointerEvents: 'none',
    containerType: 'size',
    overflow: 'hidden',
}));

const FallingNames = ({children, childrenInBack} : FallingNamesProps) => {
    return (
        <Wrapper>
            {/* {
                names.map((ele) => 
                    <FallingName
                        entry={ele}
                        properties={{animationDelay: Math.random() * 5}}
                    />
                )
            } */}
            { children }
        </Wrapper>
    );
}

export default FallingNames;
