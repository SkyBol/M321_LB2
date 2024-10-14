import AbstractService from "../../../../core/modules/abstract/services/AbstractService";
import Review from "../models/ReviewEntry.model";

const ReviewService = new AbstractService<Review>("/call/review/");

export default ReviewService;