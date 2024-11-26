export default class Block {
  type: "text" | "question";

  constructor(type: "text" | "question") {
    this.type = type;
  }
}
