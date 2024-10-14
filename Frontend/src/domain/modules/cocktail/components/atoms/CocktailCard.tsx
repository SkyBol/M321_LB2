import { useNavigate } from "react-router-dom";
import Cocktail from "../../models/Cocktail.model";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import AbstractCardTitle from "../../../../../core/modules/abstract/components/card/components/atoms/AbstractCardTitle";

export interface CocktailCardProps {
    cocktail: Cocktail;
}

export const CocktailCard = ({cocktail}: CocktailCardProps) => {
    const navigate = useNavigate();

    const handleClick = async () => {
        try {
            navigate(`/cocktail/detail/${cocktail.id}`);
        } catch (error) {
            console.error("Error navigating:", error);
        }
    };

    return (
        <Card key={cocktail.id} style={{ width: 220, height: 360 }} onClick={handleClick}>
            <CardActionArea>
                <CardContent>
                    <AbstractCardTitle>{cocktail.name}</AbstractCardTitle>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CocktailCard;