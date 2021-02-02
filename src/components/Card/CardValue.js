import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import './card.css'

const CardValue = (props) => {


    return (
        <div>

            <p>How many cards</p>
            <label htmlFor="customRange3" className="form-label">Example range</label>
            <input value={props.cards} onChange={(e) => props.setCards(e.target.value)} type="range"
                   className="form-range"
                   min="8" max="40" step="2" id="customRange3"/>
            {props.cards}
        </div>
    );
}
export default CardValue;