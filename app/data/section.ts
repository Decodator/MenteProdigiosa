import Block from "./blocks/block";

export default class Section {
  blocks: Block[];

  constructor({ blocks }: { blocks: Block[] }) {
    this.blocks = blocks;
  }
}
