import BottleCard from "../../atoms/BottleCard/BottleCard.tsx";
import Bottle from "../../../models/Bottle.model.ts";
import { useTheme, useMediaQuery, Grid } from "@mui/material";

type BottleListProps = {
  bottles: Bottle[];
}

const BottleList = ({ bottles }: BottleListProps) => {
  const theme = useTheme();
  const isHandyView = useMediaQuery(theme.breakpoints.down('sm')); // adjust the breakpoint as needed

  return (
    <Grid container spacing={2}>
      {bottles.map((bottle) => (
        <Grid item key={bottle.id} xs={isHandyView ? 12 : 6} sm={6} md={4} lg={3} style={isHandyView ? { marginLeft: '50%', transform: 'translateX(-50%)', marginTop: 50 } : {}}>
          <BottleCard bottle={bottle} />
        </Grid>
      ))}
    </Grid>
  );
}

export default BottleList;