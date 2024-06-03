"use client"

import { QuestionItem } from "@/components/QuestionItem";
import { Results } from "@/components/Results";
import { questions } from "@/data/questions";
import { useEffect, useState } from "react";
import { Question } from "@/types/Question";

const Page = () => {

  const [answers, setAnswers] = useState < number[] > ([]);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showResult, setShowResult] = useState(false);
  
  const title = 'Quiz de Conhecimentos Gerais';

  const shuffle = (questions: Question[]) => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [questions[i], questions[j]] = [questions[j], questions[i]]
    }
  }

  useEffect(() => {
    let ignore = false;
    if (!ignore)  shuffle(questions)
    return () => { ignore = true; }
    },[]);
  
  const loadNextQuestion = () => {
    if(questions[currentQuestion+1]) {
      setCurrentQuestion(currentQuestion+1);
    } else {
      setShowResult(true);
    }
  }

  const handleAnswered = (answer: number) => {
    setAnswers ([...answers, answer]);
    loadNextQuestion();
  }

  const restartButton = () => {
    setAnswers([]);
    setCurrentQuestion(0);
    setShowResult(false);
    shuffle(questions);
  }

  return (
    <div className="w-full h-screen flex justify-center items-center bg-blue-200">
      <div className="w-full max-w-xl rounded-md bg-white text-black shadow shadow-black">
        <div className="flex justify-center items-center p-5 font-bold text-3xl shadow shadow-gray-300">
          {title}
        </div>
        <div className="p-5">
          {!showResult &&
          <QuestionItem
            question = {questions[currentQuestion]}
            count={currentQuestion + 1}
            onAnswer={handleAnswered}
          />
          }
          {showResult &&
            <Results questions={questions} answers ={answers}/>
          }
        </div>
        <div className="p-5 text-center border-t border-gray-300">
          {!showResult &&
            `${currentQuestion + 1} de ${questions.length} pergunta${questions.length === 1 ? '' : 's'}`
          }
          {showResult &&
            <button onClick={restartButton} className="px-3 py-2 rounded-md bg-blue-800 text-white">Reiniciar Quiz</button>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;
