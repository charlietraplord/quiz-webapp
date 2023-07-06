import { ShuffleArray } from "../../utils/arrayUtils";
import QuizHome from "./Quiz";
import { Difficulty, QuestionState, Question } from "../../types/quiz";
import { TIMEOUT } from "dns";

const TOTAL_QUESTIONS = 10;

const getQuestions = async (amount: number, difficulty: Difficulty): Promise<QuestionState> =>{
  const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;

  const data = await( await fetch( endpoint, {cache: 'no-store'})).json();

  return data.results.map((question:Question) => ({
    ...question, 
    answers: ShuffleArray([...question.incorrect_answers, question.correct_answer])
  }));
};

const Home = async () => {
  const questions = await getQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM);
  return 
  <QuizHome questions={questions} totalQuestions={TOTAL_QUESTIONS}/>
};

export default Home;
