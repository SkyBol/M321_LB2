import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import BottleService from "../../../services/BottleService.ts";
import BottleForm from "../../molecules/BottleForm/BottleForm.tsx";
import Bottle, { defaultBottle } from "../../../models/Bottle.model.ts";

const BottlePage = () => {
    const navigate = useNavigate();
    const { bottleId } = useParams();
    const [bottle, setBottle] = useState<Bottle>(defaultBottle);

    useEffect(() => {
        if (bottleId) {
            BottleService.get(bottleId).then((res) => {
                setBottle(res.data);
            });
        }
    }, [bottleId]);

    const submitActionHandler = async (values: Bottle) => {
        try {
            if (bottleId === undefined) {
                await BottleService.save(values);
            } else {
                await BottleService.update(values, values.id);
            }

            // Navigate back
            navigate("/bottles");
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return <BottleForm bottle={bottle} submitActionHandler={submitActionHandler} />;
};

export default BottlePage;
