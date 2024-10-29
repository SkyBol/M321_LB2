import { useEffect, useState } from "react";
import Bottle from "../../../models/Bottle.model.ts";
import { useParams } from "react-router-dom";
import BottleService from "../../../services/BottleService";
import BottleType from "../../../models/BottleTypes.model";




const CardVideoBackground = () => {
    
    const [bottle, setBottle] = useState<Bottle | null>(null);
    const { bottleId } = useParams();
    const [loading, setLoading] = useState(true);
    const [videoBackground, setVideoBackground] = useState<string>();

    useEffect(() => {
        if (bottleId) {
            BottleService.get(bottleId)
                .then((res) => {
                    setBottle(res.data);
                    setVideo(res.data)
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching bottle details:', error);
                    setLoading(false);
                });
        }
        
    }, [bottleId]);

const setVideo = (bottle:Bottle)=>{
    
    if(bottle){
        
        switch(bottle.type){
        }
    
    }
}




    return (
        <div
            style={{
                position: "fixed", 
                zIndex: 0, 
                top: 0,
                left: 0,
                width: "100%", 
                height: "100%", 
                overflow: "hidden",
            }}
        >
            <video
                src={videoBackground}
                autoPlay
                loop
                muted
                style={{
               
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    

                    
                }}
            />
        </div>
    );
};

export default CardVideoBackground;
