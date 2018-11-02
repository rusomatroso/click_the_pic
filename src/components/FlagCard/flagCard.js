import React from "react";
import "./flagCard.css";

const FlagCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectFlag(props.country)}
                className={props.scoreCurrent === 0 ? "country-preview country-preview-ex" : "country-preview"}
            >
                <img alt={props.country} src={props.image} />
            </a>
        </div>
    </div>
);

export default FlagCard;
