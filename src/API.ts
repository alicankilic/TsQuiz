import { shuffleArray } from "./utils";

export interface Question {
  category: string;
  correctAnswer: string;
  difficulty: string;
  incorrectAnswers: string[];
  question: string;
  type: string;
}

export interface QuestionState {
  Question: Question;
  answers: string[];
}

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const fetchQuizQuestions = async(
  amount: number,
  difficulty: Difficulty
) => {
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
  const fetching = await fetch(endpoint);
  const data = await fetching.json();
  if (data.ok) {
    return data.results.map((question: Question) => {
      return {
        ...question,
        answers: shuffleArray([
          ...question.incorrectAnswers,
          question.correctAnswer,
        ]),
      };
    });
  } else {
    return console.log("CANT REACH OUT THE API CALL");
  }
};
