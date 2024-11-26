import Block from "./block";

export default class TextBlock extends Block {
  text: string;
  constructor(text: string) {
    super("text");
    this.text = text;
  }
}
