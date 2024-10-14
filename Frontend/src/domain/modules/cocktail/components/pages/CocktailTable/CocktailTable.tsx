import { useEffect, useState } from "react";
import Cocktail from "../../../models/Cocktail.model";
import CocktailService from "../../../services/CocktailService";
import CocktailList from "../../molecules/CocktailList";

const CocktailTable = () => {
    const [cocktails, setCocktails] = useState<Cocktail[]>([])

    useEffect(() => {
        CocktailService.getAll().then((res) => {
            setCocktails(res.data);
        });
    }, []);


    return (
        <div style={{padding:15}}>
            <CocktailList
                cocktails={cocktails}
            />
        </div>
    )
}

export default CocktailTable;