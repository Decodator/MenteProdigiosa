import Block from "./blocks/block";
import Section from "./section";

export default class WorkingSection extends Section {
  blocks: Block[];
  answer: string | undefined = undefined;

  constructor({
    blocks,
    answer,
  }: {
    blocks: Block[];
    answer: string | undefined;
  }) {
    super("working");
    this.blocks = blocks;
    this.answer = answer;
  }
}
