import { useEffect, useState } from "react";
import Bottle from "../../../models/Bottle.model.ts";
import { useParams } from "react-router-dom";
import BottleService from "../../../services/BottleService";
import BottleType from "../../../models/BottleTypes.model";
import rum from "../../../../../../assets/videos/rumBg.mp4";
import absinth from "../../../../../../assets/videos/absinth.mp4";
import tequila from "../../../../../../assets/videos/agave_2.mp4";
import soda from "../../../../../../assets/videos/soda.mp4";
import bier from "../../../../../../assets/videos/beer_1.mp4";
import brandy from "../../../../../../assets/videos/grape_1.mp4";
import wein from "../../../../../../assets/videos/grape_2.mp4";
import grappa from "../../../../../../assets/videos/grape_3.mp4";
import cognac from "../../../../../../assets/videos/cognac.mp4";
import gin from "../../../../../../assets/videos/gin.mp4";
import drink from "../../../../../../assets/videos/drink.mp4";
import met from "../../../../../../assets/videos/honey_2.mp4";
import mezcal from "../../../../../../assets/videos/agave_1.mp4";
import obst from "../../../../../../assets/videos/apple.mp4";
import raki from "../../../../../../assets/videos/pear.mp4";
import ouzo from "../../../../../../assets/videos/anise.mp4";
import sake from "../../../../../../assets/videos/rice.mp4";
import schnaps from "../../../../../../assets/videos/liquoer.mp4";
import special from "../../../../../../assets/videos/special.mp4";
import wermut from "../../../../../../assets/videos/forest.mp4";
import wodka from "../../../../../../assets/videos/wodka.mp4";
import whisky from "../../../../../../assets/videos/barrel_1.mp4";






const CardVideoBackground = () => {
    
    const [bottle, setBottle] = useState<Bottle | null>(null);
    const { bottleId } = useParams();
    const [loading, setLoading] = useState(true);
    const [videoBackground, setVideoBackground] = useState<string>(drink);

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
            case BottleType.Absinth:
                setVideoBackground(absinth)
                break;
            case BottleType.Alkoholfrei:
                setVideoBackground(soda)
                break;
            case BottleType.Bier:
                setVideoBackground(bier)
                break;
            case BottleType.Brandy:
                setVideoBackground(brandy)
                break;
            case BottleType.Cognac:
                setVideoBackground(cognac)
                break;
            case BottleType.Gin:
                setVideoBackground(gin)
                break;
            case BottleType.Grappa:
                setVideoBackground(grappa)
                break;
            case BottleType.Likoer:
                setVideoBackground(drink)
                break;
            case BottleType.Met:
                setVideoBackground(met)
                break;
            case BottleType.Mezcal:
                setVideoBackground(mezcal)
                break;
            case BottleType.Obstbrand:
                setVideoBackground(obst)
                break;
            case BottleType.Ouzo:
                setVideoBackground(ouzo)
                break;
            case BottleType.Raki:
                setVideoBackground(raki)
                break;
            case BottleType.Rum:
                setVideoBackground(rum)
                break;
            case BottleType.Sake:
                setVideoBackground(sake)
                break;
            case BottleType.Schnaps:
                setVideoBackground(schnaps)
                break;
            case BottleType.Softgetraenk:
                setVideoBackground(soda)
                break;
            case BottleType.Spezial:
                setVideoBackground(special)
                break;
            case BottleType.Tequila:
                setVideoBackground(tequila)
                break;
            case BottleType.Wein:
                setVideoBackground(wein)
                break;
            case BottleType.Wermut:
                setVideoBackground(wermut)
                break;
            case BottleType.Whisky:
                setVideoBackground(whisky)
                break;
            case BottleType.Wodka:
                setVideoBackground(wodka)
                break;
            default:
                setVideoBackground(drink); 
                break;
            

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
