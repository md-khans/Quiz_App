import React, { useState, useRef, useEffect } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion,setcurrentQuestion]=useState(0);
    const [score,setscore] = useState(0);
    const [clickedoption,setclickedoption]=useState(0)
    const [showresult,setshowResult]=useState(false);
    const changequestion = ()=>{
        updatescore();
        if(currentQuestion< QuizData.length-1){
        setcurrentQuestion(currentQuestion+1);
        setclickedoption(0);
    }else{
        setshowResult(true)
    }
    }
    const updatescore=()=>{
        if(clickedoption===QuizData[currentQuestion].answer){
            setscore(score+1);
        }
    }
    const resetAll=()=>{
        setshowResult(false);
        setcurrentQuestion(0);
        setclickedoption(0);
        setscore(0);
    }
    return (
        <div>
            <p className="heading-txt">Quiz App</p>
            <div className="container">
                {showresult ? (
                    <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll}/>
                ):(
                <> 
                <div className="question">
                    <span id="question-number">{currentQuestion+1}. </span>
                    <span id="question-txt">{QuizData[currentQuestion].question} </span>
                </div>
                <div className="option-container">
                 {QuizData[currentQuestion].options.map((Option,i)=>{
                    return(
                        <button 
                        // className="option-btn"
                        className={`option-btn ${
                            clickedoption == i+1?"checked":null
                        }`}
                        key={i}
                        onClick={()=>setclickedoption(i+1)}
                        >
                            {Option}
                        </button>
                    )
                 })}   
                </div>
                <input type="button" value="Next" id="next-button" onClick={changequestion} />
                </>)}
            </div>
        </div>
    )
}

export default Quiz