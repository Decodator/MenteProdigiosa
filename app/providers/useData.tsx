import { createContext, useContext, useState } from "react";
import Lesson from "../data/lesson";
import TextBlock from "../data/blocks/textBlock";
import WorkingSection from "../data/workingSection";
import ReviewSection from "../data/reviewSection";

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
        new WorkingSection({
          blocks: [
            new TextBlock("2(2) = 4"),
            new TextBlock("2(3) = 6"),
            new TextBlock("3(4) = ?"),
          ],
          answer: "12",
        }),
        new WorkingSection({
          blocks: [new TextBlock("3(7) = ?")],
          answer: "21",
        }),
        new ReviewSection({
          text: "Has aprendido diferentes tipos de notación para la multiplicación",
        }),
      ],
    }),
    new Lesson({ id: "jg03f", title: "Exponentes", sections: [
      new WorkingSection({blocks: [], answer: "x^3"})
    ] }),
  ];

  const [lessons] = useState(sampleLessons);
  return (
    <DataContext.Provider value={{ lessons }}>{children}</DataContext.Provider>
  );
};
