import { Card as MuiCard, CardContent, CardActions, Button } from "@mui/material";
import VideoBackground
    from "../../../../../../../domain/modules/bootle/components/pages/BottlePage/VideoBackground.tsx";
import Bottle from "../../../../../../../domain/modules/bootle/models/Bottle.model.ts";

interface AbstractCardProps {
    handleEdit : (id: string) => void;
    handleDelete : (id: string) => void;
    id : string;
    bottle: Bottle;
}

const AbstractCard = ({ handleEdit, handleDelete, id, bottle } : AbstractCardProps) => {


    return (
        <div style={{position:"relative", overflow:"hidden"}}>
            <VideoBackground />
            <div style={{position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1,}}>
                <MuiCard sx={{ minWidth: 200 }}>
                    <CardContent>
                        {bottle.name}
                        <CardActions>
                            <Button
                                size="small"
                                color="primary"
                                variant="contained"
                                onClick={() => handleEdit(id)}
                            >
                                Edit
                            </Button>
                            <Button
                                size="small"
                                color="error"
                                variant="contained"
                                onClick={() => handleDelete(id)}
                            >
                                Delete
                            </Button>
                        </CardActions>
                    </CardContent>
                </MuiCard>
            </div>
        </div>
    );
};

export default AbstractCard;