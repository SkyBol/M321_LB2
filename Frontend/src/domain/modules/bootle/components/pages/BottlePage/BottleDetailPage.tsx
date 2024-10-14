import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Bottle from "../../../models/Bottle.model.ts";
import BottleService from "../../../services/BottleService.ts";
import NewAbstractCard from '../../../../../../core/modules/abstract/components/card/components/molecules/NewAbsctractCard.tsx';
import CardVideoBackground from './VideoBackground.tsx';



const BottleDetailPage = () => {
    const [loading, setLoading] = useState(true);
    const { bottleId } = useParams();
    const navigate = useNavigate();
    const [bottle, setBottle] = useState<Bottle | null>(null);

    useEffect(() => {
        if (bottleId) {
            BottleService.get(bottleId)
                .then((res) => {
                    setBottle(res.data);
                    setLoading(false);
                })
                .catch((error) => {
                    console.error('Error fetching bottle details:', error);
                    setLoading(false);
                });
        }
    }, [bottleId]);

    const handleEdit = (id: string) => {
        navigate('/bottles/' + id);
    };

    const handleDelete = (id: string) => {
        BottleService.delete(id).then(() => {
            navigate("/bottles/");
        });
    };

    return (
        <div style={{ position: 'relative', zIndex: 2 }}>
            <CardVideoBackground />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh', 
                padding: '20px', 
            }}>
                {loading ? (
                    <Typography variant="body1">Loading...</Typography>
                ) : bottle ? (
                    <NewAbstractCard
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                            id={bottle.id} 
                            bottle={bottle}                      
                    />
                ) : (
                    <Typography variant="body1">No bottle found with ID {bottleId}</Typography>
                )}
            </div>
        </div>
    );
};

export default BottleDetailPage;
