import React from "react";
import { Button } from "@mui/material";
import styles from "./AbstractCard.module.css"; 
import {  useNavigate } from "react-router-dom";
import ImageService from "../../../../../../../domain/modules/bootle/services/ImageService";
import AbstractCardTag from "../atoms/AbstractCardTag";
import Cocktail from "../../../../../../../domain/modules/cocktail/models/Cocktail.model";

interface CocktailAbstractCardProps {
    handleEdit: (id: string) => void;
    handleDelete: (id: string) => void;
    id: string;
    cocktail: Cocktail;
}

const CocktailAbstractCard: React.FC<CocktailAbstractCardProps> = ({ handleEdit, handleDelete, id, cocktail }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <div className={styles.overviewInfo}>
                <div className={styles.actions}>
                    <div className={styles.backbutton}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={()=>navigate(-1)}
                        >
                            <path
                                d="M1.02698 11.9929L5.26242 16.2426L6.67902 14.8308L4.85766 13.0033L22.9731 13.0012L22.9728 11.0012L4.85309 11.0033L6.6886 9.17398L5.27677 7.75739L1.02698 11.9929Z"
                                fill="currentColor"
                            />
                        </svg>
                    </div>
                    <div></div>
                </div>

                <div className={styles.productinfo}>
                    <div className={styles.grouptext}>
                        <h3>Name</h3>
                        <p>{cocktail.name}</p>
                    </div>
                    <div className={styles.grouptext}>
                        <h3>Glas</h3>
                        <p>{cocktail.glass}</p>
                    </div>
                    <div className={styles.grouptext}>
                        <h3>{cocktail.alcoholic ? "Mit" : "Ohne"} Alkohol</h3>
                    </div>              
                </div>
            </div>

            <div className={styles.productSpecifications}>
                <h1>Instructions (EN)</h1>
                <p>
                    {cocktail.instructions}
                </p>
                <div className={styles.cardActions}>
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
                </div>
            </div>
        </div>
     
    );
};

export default CocktailAbstractCard;
