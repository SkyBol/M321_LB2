import AbstractService from "../../../../core/modules/abstract/services/AbstractService";
import Cocktail from "../models/Cocktail.model.ts";

const CocktailService = new AbstractService<Cocktail>("/cocktail/");

export default CocktailService;