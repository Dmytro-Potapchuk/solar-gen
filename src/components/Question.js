import React, { useState } from "react";
import css from "./Survey/Surveu.module.css";

const Question = ({ question, options, onAnswer }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleAnswer = () => {
        onAnswer(selectedOption);
    };

    return (
        <div className={css.Survey}>
            <h3>{question}</h3>
            {options.map((option) => (
                <div key={option}>
                    <label>
                        <input
                            type="radio"
                            name={question}
                            value={option}
                            checked={selectedOption === option}
                            onChange={(e) => setSelectedOption(e.target.value)}
                        />
                        {option}
                    </label>
                </div>
            ))}
            <button onClick={handleAnswer}>Next</button>
        </div>
    );
};
export {Question}