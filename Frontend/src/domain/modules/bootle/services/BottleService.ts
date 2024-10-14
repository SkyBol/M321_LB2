import AbstractService from "../../../../core/modules/abstract/services/AbstractService";
import Bottle from "../models/Bottle.model.ts";

const BottleService = new AbstractService<Bottle>("/call/bottles/");

export default BottleService;