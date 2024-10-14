import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cocktail from "../../../models/Cocktail.model";
import CocktailService from "../../../services/CocktailService";
import { Typography } from "@mui/material";
import CocktailAbstractCard from "../../../../../../core/modules/abstract/components/card/components/molecules/CocktailAbstractCard";


const CocktailDetailPage = () => {
    const { cocktailId } = useParams();
    const navigate = useNavigate();
    const [cocktail, setCocktail] = useState<Cocktail | null>(null);

    useEffect(() => {
        if (cocktailId) {
            CocktailService.get(cocktailId)
                .then((res) => {
                    setCocktail(res.data);
                })
                .catch((error) => {
                    console.error('Error fetching bottle details:', error);
                });
        }
    }, [cocktailId]);

    const handleEdit = (id: string) => {
        navigate('/cocktail/' + id);
    };

    const handleDelete = (id: string) => {
        CocktailService.delete(id).then(() => {
            navigate("/cocktail/");
        });
    };
  
    return (
        <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', 
                padding: '20px', 
            }}>
                {cocktail ? (
                    <CocktailAbstractCard
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        id={cocktail.id}
                        cocktail={cocktail}
                    />
                ) : (
                    <Typography variant="body1">No cocktail found with ID {cocktailId}</Typography>
                )}
            </div>
        </div>
    );
}

export default CocktailDetailPage;