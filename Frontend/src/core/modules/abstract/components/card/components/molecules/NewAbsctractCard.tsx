import React from "react";
import { Button } from "@mui/material";
import styles from "./AbstractCard.module.css"; 
import Bottle from "../../../../../../../domain/modules/bootle/models/Bottle.model";
import {  useNavigate } from "react-router-dom";
import ImageService from "../../../../../../../domain/modules/bootle/services/ImageService";
import AbstractCardTag from "../atoms/AbstractCardTag";

interface AbstractCardProps {
    handleEdit: (id: string) => void;
    handleDelete: (id: string) => void;
    id: string;
    bottle: Bottle;
}

const NewAbstractCard: React.FC<AbstractCardProps> = ({ handleEdit, handleDelete, id, bottle }) => {
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
                        <p>{bottle.name}</p>
                    </div>
                    <div className={styles.grouptext}>
                        <h3>Sorte</h3>
                        <p>{bottle.type}</p>
                    </div>
                    <div className={styles.grouptext}>
                        <h3>Land</h3>
                        <img src={`https://flagcdn.com/w20/${bottle.country?.toLowerCase()}.png`} alt={"picture of the bottle"} style={{width: 30, height: 20 ,paddingRight:5}}/>
                    </div>

                    <div className={styles.productImage}>
                        <img src={ImageService.imageUrl(bottle.img_id)} alt="product image" />
                    </div>                
                   
                </div>
            </div>

            <div className={styles.productSpecifications}>
            <AbstractCardTag tags={bottle.tags}/>
                <h1>Beschreibung</h1>
                <p>
                    {bottle.description}
                </p>

                <div className={styles.productFeatures}>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}></div>
                        <div className={styles.featureText}>
                            <p><strong>Cocktail 1</strong></p>
                            <p>Test</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}></div>
                        <div className={styles.featureText}>
                            <p><strong>Cocktail 2</strong></p>
                            <p>Test</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}></div>
                        <div className={styles.featureText}>
                            <p><strong>Cocktail 3</strong></p>
                            <p>Test</p>
                        </div>
                    </div>
                    <div className={styles.feature}>
                        <div className={styles.featureIcon}></div>
                        <div className={styles.featureText}>
                            <p><strong>Cocktail 4</strong></p>
                            <p>Test</p>
                        </div>
                    </div>
                </div>
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

export default NewAbstractCard;
