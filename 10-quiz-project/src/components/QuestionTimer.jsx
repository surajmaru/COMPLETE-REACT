import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function QuestionTimer({timeout, onTimeout}) {
  
    const [remainingTime, setRemainingTime] = useState(timeout);
    
    useEffect(() => {
        console.log("setting timeout");
        const timer = setTimeout(onTimeout, timeout);
        
        return () => clearTimeout(timer);
    }, [onTimeout]);

    useEffect(() => {
        console.log("setting interval");
        const interval = setInterval(() => {
            setRemainingTime(prevRemainingTime => prevRemainingTime - 100);
        }, 100);

        return () => clearInterval(interval);
    },[]);
  
    return (
    <progress 
    id='question-time'
    max={timeout}
    value={remainingTime}
    />
  )
}

export default QuestionTimer