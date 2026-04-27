import { useState } from 'react'

import QUESTIONS from "../questions.js";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from './QuestionTimer.jsx';
import { useCallback } from 'react';
import { useRef } from 'react';
import Answers from './Answers.jsx';
import Question from './Question.jsx';

function Quiz() {

    const [userAnswers, setUserAnswers] = useState([]);

    const activeQuestionIndex = userAnswers.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {

        setUserAnswers((prevUserAnswers) => {
            return [
                ...prevUserAnswers,
                selectedAnswer
            ];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])

    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    if(quizIsComplete){
        return <div id='summary'>
            <img 
            src={quizCompleteImg}
            alt='Quiz complete'
            />
            <h2>Quiz completed</h2>
        </div>
    };
    
  return (
    <div id='quiz'>
        <Question 
        questionIndex={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        />
    </div>
  )
}

export default Quiz