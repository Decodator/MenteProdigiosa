import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router, useLocalSearchParams } from "expo-router";
import { useData } from "../providers/useData";
import { useState } from "react";
import ProgressBar from "@/components/ProgressBar";
import { Pressable, Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import MathKeyboard from "@/components/MathKeyboard";

export default function LessonScreen() {
  const id = useLocalSearchParams().id;
  const { lessons } = useData();
  //Find lesson
  const lesson = lessons.find((lesson) => lesson.id == id)!;

  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [currentAnswer, setCurrentAnswer] = useState<string>("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | undefined>(
    undefined
  );

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
    setIsAnswerCorrect(undefined);
  };

  const clearAnswer = () => {
    setCurrentAnswer("");
    setIsAnswerCorrect(undefined);
  };

  const handleNextSection = () => {
    if (currentSectionIndex < lessons.length + 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
      setCurrentAnswer("");
      setIsAnswerCorrect(undefined);
    } else {
      router.back();
    }
  };

  const handlePreviousSection = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const currentSection = lesson?.sections[currentSectionIndex];

  const checkAnswer = () => {
    if (currentSection.answer == currentAnswer) {
      setIsAnswerCorrect(true);
    } else {
      setIsAnswerCorrect(false);
    }
  };

  if (lesson) {
    return (
      <ThemedView style={{ flex: 1}}>
        <ProgressBar
          totalSections={lesson.sections.length}
          currentSection={currentSectionIndex + 1}
        />
        {currentSection.type == "working" && (
          <ThemedView style={{ flex: 1 }}>
            <ThemedView style={{ flex: 100, gap: 12, padding: 20 }}>
              <ThemedView
                style={{
                  gap: 12,
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                }}
              >
                {currentSection.blocks.map((block, index) => (
                  <ThemedView key={index}>
                    {block.text && (
                      <ThemedText style={{ fontSize: 24 }}>
                        {block.text}
                      </ThemedText>
                    )}
                  </ThemedView>
                ))}
              </ThemedView>
            </ThemedView>
            <ThemedView style={{ flexDirection: "row" }}>
              <TextInput
                style={{
                  flex: 3,
                  padding: 12,
                  backgroundColor: "lightgrey",
                }}
                value={currentAnswer}
              />
              {isAnswerCorrect != undefined && isAnswerCorrect && (
                <Pressable
                  style={{ flex: 1, padding: 12, backgroundColor: "green" }}
                  onPress={() => handleNextSection()}
                >
                  <Text style={{ color: "white" }}>Continuar</Text>
                </Pressable>
              )}
              {isAnswerCorrect != undefined && !isAnswerCorrect && (
                <Pressable
                  style={{ flex: 1, padding: 12, backgroundColor: "red" }}
                  onPress={() => clearAnswer()}
                >
                  <Text style={{ color: "white" }}>CE</Text>
                </Pressable>
              )}
              {isAnswerCorrect == undefined && (
                <Pressable
                  style={{ flex: 1, padding: 12, backgroundColor: "black" }}
                  onPress={() => checkAnswer()}
                >
                  <Text style={{ color: "white" }}>Revisar</Text>
                </Pressable>
              )}
            </ThemedView>
            <MathKeyboard
              onButtonPressed={(name) => handleKeyboardButtonPress(name)}
            />
          </ThemedView>
        )}
        {currentSection.type == "review" && (
          <ThemedView
            style={{
              flex: 1,
              padding: 20,
              gap: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ThemedText type="title">Felicidades!</ThemedText>
            <ThemedText>{currentSection.text}</ThemedText>
            <Pressable
              style={{ padding: 12, backgroundColor: "black" }}
              onPress={() => handleNextSection()}
            >
              <Text style={{ color: "white" }}>Entendido!</Text>
            </Pressable>
          </ThemedView>
        )}
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
