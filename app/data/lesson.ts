import Section from "./section";

export default class Lesson {
  id: string;
  title: string;
  sections: Section[];

  constructor({
    id,
    title,
    sections,
  }: {
    id: string;
    title: string;
    sections: Section[];
  }) {
    this.id = id;
    this.title = title;
    this.sections = sections;
  }
}
