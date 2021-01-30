import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import './card.css'

const CardValue = (props) => {
    const [cardValue, setCardValue] = useState(16)


    return (
        <div>

            <p>How many cards</p>
            <label htmlFor="customRange3" className="form-label">Example range</label>
            <input value={cardValue} onChange={(e) => setCardValue(e.target.value)} type="range" className="form-range"
                   min="8" max="40" step="2" id="customRange3"/>
            {cardValue}
        </div>
    );
}
export default CardValue;