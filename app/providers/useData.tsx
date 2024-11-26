import { createContext, useContext, useState } from "react";
import Lesson from "../data/lesson";
import Section from "../data/section";
import Block from "../data/blocks/block";
import TextBlock from "../data/blocks/textBlock";
import QuestionBlock from "../data/blocks/questionBlock";

const DataContext = createContext({
  lessons: [] as Lesson[],
});

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }: { children: any }) => {
  const sampleLessons = [
    new Lesson({
      id: "hg320hil",
      title: "jerarquia de operaciones",
      sections: [
        new Section({
          blocks: [
            new TextBlock("2(2) = 4"),
            new TextBlock("2(3) = 6"),
            new QuestionBlock({ question: "3(4) = ", answer: "6" }),
          ],
        }),
      ],
    }),
  ];

  const [lessons] = useState(sampleLessons);
  return (
    <DataContext.Provider value={{ lessons }}>{children}</DataContext.Provider>
  );
};
