import Block from "./block";

export default class QuestionBlock extends Block {
  question: string;
  answer: string;
  constructor({ question, answer }: { question: string; answer: string }) {
    super("question");
    this.question = question;
    this.answer = answer;
  }
}
