import {Question} from "../Question";
import {useState} from "react";
import  css from "./Surveu.module.css";

const Survey = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState([]);

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
        setStep(step + 1);
    };

    const questions = [
        {
            question: "What is your favorite color?",
            options: ["Red", "Blue", "Green"],
        },
        {
            question: "What is your favorite animal?",
            options: ["Dog", "Cat", "Fish"],
        },
        {
            question: "What is your favorite food?",
            options: ["Pizza", "Burger", "Sushi"],
        },
    ];

    return (
        <div className={css.Survey}>

        <div >
            {step < questions.length ? (
                <Question
                    question={questions[step].question}
                    options={questions[step].options}
                    onAnswer={handleAnswer}
                />
            ) : (
                <div  >
                    <h3>Thank you for completing the survey!</h3>
                    <p>Answers: {answers.join(", ")}</p>
                </div>
            )}
        </div>
        </div>
    );
};

export {Survey};