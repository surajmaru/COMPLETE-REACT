import { useState } from 'react'

import QUESTIONS from "../questions.js";
import QuestionTimer from './QuestionTimer.jsx';
import { useCallback } from 'react';
import { useRef } from 'react';
import Answers from './Answers.jsx';
import Question from './Question.jsx';
import Summary from './Summary.jsx';

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

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;
    
    if(quizIsComplete){
        return <Summary userAnswers={userAnswers}/>
    };
    
  return (
    <div id='quiz'>
        <Question 
        key={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        questionIndex={activeQuestionIndex}
        />
    </div>
  )
}

export default Quiz