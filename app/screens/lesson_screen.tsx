import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router, useLocalSearchParams } from "expo-router";
import { useData } from "../providers/useData";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import { Pressable, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MathKeyboard from "@/components/MathKeyboard";

export default function LessonScreen() {
  const id = useLocalSearchParams().id;
  const { lessons } = useData();
  //Find lesson
  const lesson = lessons.find((lesson) => lesson.id == id)!;

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentBlockIndex, setCurrentBlockIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");

  const deleteLastCharacter = () => {
    setCurrentAnswer(currentAnswer.slice(0, currentAnswer.length - 1));
  };

  const appendToAnswer = (appendix: string) => {
    setCurrentAnswer(currentAnswer + appendix);
  };

  const handleKeyboardButtonPress = (name: string) => {
    if (name == "delete") {
      deleteLastCharacter();
    } else {
      appendToAnswer(name);
    }
  };

  const handleNextSection = () => {
    if (currentSectionIndex < lessons.length - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentBlockIndex(0);
    } else {
      if (0 == 0) {
        router.push("/screens/review_screen");
      }
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const currentSection = lesson?.sections[currentSectionIndex];

  const handleNextBlock = () => {
    if (currentBlockIndex < currentSection.blocks.length - 1) {
      setCurrentBlockIndex(currentBlockIndex + 1);
    } else {
      if (0 == 0) {
        handleNextSection();
      }
    }
  };

  const handlePreviousBlock = () => {
    if (currentBlockIndex > 0) {
      setCurrentBlockIndex(currentBlockIndex - 1);
    }
  };

  const sectionedBlocks = currentSection.blocks.slice(0, currentBlockIndex + 1);

  if (lesson) {
    return (
      <ThemedView style={{ flex: 1 }}>
        <ThemedText>{currentAnswer}</ThemedText>
        <ThemedView style={{ flex: 200, gap: 12, padding: 20 }}>
          <ProgressBar
            totalSections={lesson.sections.length}
            currentSection={currentSectionIndex}
          />
          {sectionedBlocks.map((block, index) => (
            <ThemedView style={{ gap: 12 }} key={index}>
              {block.text && (
                <ThemedText style={{ fontSize: 18 }}>{block.text}</ThemedText>
              )}
              {block.question && (
                <ThemedView>
                  <ThemedText style={{ fontSize: 18 }}>
                    {block.question}
                  </ThemedText>
                  <TextInput
                    style={{
                      padding: 12,
                      backgroundColor: "lightgrey",
                      borderRadius: 12,
                    }}
                    value={currentAnswer}
                  />
                </ThemedView>
              )}
            </ThemedView>
          ))}
          <Pressable
            style={{ padding: 12, backgroundColor: "black", borderRadius: 12 }}
            onPress={() => handleNextBlock()}
          >
            <Text style={{ color: "white" }}>De acuerdo</Text>
          </Pressable>
        </ThemedView>
        <MathKeyboard
          onButtonPressed={(name) => handleKeyboardButtonPress(name)}
        />
      </ThemedView>
    );
  } else {
    return (
      <ThemedView>
        <ThemedText>
          Oops! Parece que no puedo ser encontrada tu lección
        </ThemedText>
      </ThemedView>
    );
  }
}
