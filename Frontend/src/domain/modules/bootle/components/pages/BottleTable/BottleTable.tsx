import { useEffect, useState } from "react";
import Bottle from "../../../models/Bottle.model.ts";
import BottleService from "../../../services/BottleService.ts";
import BottleList from "../../molecules/BottleList/BottleList.tsx";
import ReviewService from "../../../../review/services/ReviewService.ts";
import Review from "../../../../review/models/ReviewEntry.model.ts";

const BottleTable = () => {

    const [bottles, setBottles] = useState<Bottle[]>([])

    useEffect(() => {
        const getBottles = async () => {
            const bottles: Bottle[] = (await BottleService.getAll()).data;
            const reviews: Review[] = (await ReviewService.getAll()).data;

            const reviewedBottles = bottles.map((bottle) => {
                const reviewForBottle = reviews.find((review) => review.bottle_id === bottle.id);

                if (!reviewForBottle) {
                    return bottle;
                }

                bottle.rating = reviewForBottle.bottle_review.reduce((a, b) => Number(a) + Number(b), 0) / reviewForBottle.bottle_review.length;
                return bottle;
            });

            setBottles(reviewedBottles);
        }

        getBottles();
    }, []);


    return (
        <div style={{padding:15}}>
            <BottleList
                bottles={bottles}
            />
        </div>
    )
}

export default BottleTable;