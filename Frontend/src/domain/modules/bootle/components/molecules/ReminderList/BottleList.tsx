import BottleCard from "../../atoms/BottleCard/BottleCard.tsx";
import Bottle from "../../../models/Bottle.model.ts";
import {Grid} from "@mui/material";

type BottleListProps = {
    bottles : Bottle[];
}

const BottleList = ({ bottles } : BottleListProps) => {

    return (
        <Grid container spacing={4} direction={"row"}>
            {bottles.map((bottle) => (
                <Grid item xs={12} xl={2} key={bottle.id}>
                    <BottleCard
                        bottle={bottle}
                    />
                </Grid>
            ))}
        </Grid>
    )
}

export default BottleList;