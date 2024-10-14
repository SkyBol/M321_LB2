import { Grid, useMediaQuery, useTheme } from "@mui/material";
import Cocktail from "../../models/Cocktail.model";
import CocktailCard from "../atoms/CocktailCard";

export interface CocktailListProps {
    cocktails: Cocktail[];
}

export const CocktailList = ({cocktails}: CocktailListProps) => {
    const theme = useTheme();
    const isHandyView = useMediaQuery(theme.breakpoints.down('sm')); // adjust the breakpoint as needed
  
    return (
        <Grid container spacing={2}>
            {cocktails.map((cocktail) => (
                <Grid item key={cocktail.id} xs={isHandyView ? 12 : 6} sm={6} md={4} lg={3} style={isHandyView ? { marginLeft: '50%', transform: 'translateX(-50%)', marginTop: 50 } : {}}>
                    <CocktailCard cocktail={cocktail} />
                </Grid>
            ))}
        </Grid>
    )
}

export default CocktailList;