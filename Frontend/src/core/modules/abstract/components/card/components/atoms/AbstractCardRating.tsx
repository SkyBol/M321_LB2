import {Rating, styled, Typography} from "@mui/material";
import BottleType from "../../../../../../../domain/modules/bootle/models/BottleTypes.model.ts";

import LocalBarIcon from '@mui/icons-material/LocalBar';
import HiveIcon from '@mui/icons-material/Hive';
import WineBarIcon from '@mui/icons-material/WineBar';
import SportsBarIcon from '@mui/icons-material/SportsBar';

interface AbstractCardRatingProps {
    rating : number;
    type: BottleType;
}
;
const StyledRating = styled(Rating)({
    iconFilled: {
        color: 'red', // Farbe des ausgefüllten Symbols ändern
    },
    iconEmpty: {
        color: 'grey', // Farbe des leeren Symbols ändern
    },
})

const RatingIcon =({type}:{type:BottleType})=>{
    switch (type){
        case BottleType.Bier:
            return <SportsBarIcon  fontSize="inherit"/>
        case BottleType.Wein:
            return <WineBarIcon  fontSize="inherit"/>
        case BottleType.Met:
            return <HiveIcon  fontSize="inherit"/>
        default:
            return <LocalBarIcon  fontSize="inherit"/>
    }
}

const AbstractCardRating = ({ rating, type } : AbstractCardRatingProps) => {

    return (
        <Typography variant="h5" component="div">
            <StyledRating
                name="read-only"
                value={rating}
                readOnly
                precision={0.5}
                icon={<RatingIcon type={type} />}
                emptyIcon={<RatingIcon type={type} />}
            />
        </Typography>
    )
}

export default AbstractCardRating;