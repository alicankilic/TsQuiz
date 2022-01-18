import React, { useState } from "react";
import { fetchQuizQuestions } from "./API";

//Components

import QuestionCard from "./components/QuestionsCard";

//Types

import { QuestionState, Difficulty } from "./API";

export interface AnswerObject {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTALQUESTIONS = 10;

const App = () => {
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [questionsState, setQuestionsState] = useState<QuestionState[]>([]);
  const [numberState, setNumberState] = useState<number>(0);
  const [userAnswersState, setUserAnswersState] = useState<AnswerObject[]>([]);
  const [scoreState, setScoreState] = useState(0);
  const [gameOverState, setGameOverState] = useState<boolean>(true);

  console.log(fetchQuizQuestions(TOTALQUESTIONS, Difficulty.EASY));

  const startTrivia = async () => {
    setLoadingState(true);
    setGameOverState(false);

    const newQuestions = await fetchQuizQuestions(
      TOTALQUESTIONS,
      Difficulty.EASY
    );

    setQuestionsState(newQuestions);
    setScoreState(0);
    setUserAnswersState([]);
    setNumberState(0);
    setLoadingState(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React&TS Quiz</h1>
      {gameOverState || userAnswersState.length === TOTALQUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Lets Start
        </button>
      ) : undefined}
      <p className="score">Score</p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard 
      questionNumber = {numberState+1}
      totalQuestions={TOTALQUESTIONS}
      question={questionsState[numberState].question}
      answers={questionsState[numberState].answers}
      userAnswer={userAnswersState ? userAnswersState[numberState] : undefined}
      callback={checkAnswer}
       /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
