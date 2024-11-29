import Block from "./blocks/block";
import Section from "./section";

export default class ReviewSection extends Section {
  text: string;

  constructor({ text }: { text: string }) {
    super("review");
    this.text = text;
  }
}
