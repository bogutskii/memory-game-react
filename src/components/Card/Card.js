import React, {useState} from "react";
import ReactCardFlip from "react-card-flip";
import './card.css'

const Card = (props) => {
    const [showAnswer, setShowAnswer] = useState(false)


    const flippedCard = () => {
        setShowAnswer(!showAnswer)
    };


    return (
        <div>

            <ReactCardFlip isFlipped={showAnswer} flipDirection="vertical">

                <div className="cardFrameQ" onClick={flippedCard}>
                    {'card.question'}

                    <button className="btn-green" onClick={flippedCard}>

                    </button>


                </div>

                <div className="cardFrameA" onMouseLeave={flippedCard}>
                    {"card.answer"}

                </div>

            </ReactCardFlip>

        </div>
    );
}
export default Card;