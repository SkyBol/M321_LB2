
export type Review = {
    id: string;
    bottle_id: string;
    bottle_review: number[];
}

export const defaultReview: Review = {
    id: "",
    bottle_id: "",
    bottle_review: [],
}

export default Review;

export type SingleBottleReview = {
    bottle_id: string;
    bottle_review: number;
}

export const defaultSingleBottleReview: SingleBottleReview = {
    bottle_id: "",
    bottle_review: 0,
}