import Bottle from "../../bootle/models/Bottle.model";

export type Cocktail = {
    id: string;
    name: string;
    img_id: string;
    glass: string;
    alcoholic: boolean;
    instructions: string;
    category: string[];
}

export default Cocktail;


export type Ingredient = {
    id: string;
    bottles: Bottle | null;
    bottleStringAlternative: string | null;
    amount: string;
}