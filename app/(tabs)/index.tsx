import {
  Image,
  StyleSheet,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import LessonOrb from "@/components/LessonOrb";
import { useData } from "../providers/useData";
import { router } from "expo-router";

export default function HomeScreen() {
  const { lessons } = useData();
  console.log("Lessons", lessons.length);
  return (
    <SafeAreaProvider>
      <ThemedView style={{ flex: 1, padding: 18 }}>
        <ThemedText
          style={{ fontSize: 32, fontWeight: "bold", lineHeight: 52 }}
        >
          Mente Prodigiosa
        </ThemedText>
        <ThemedView style={{ padding: 32 }}>
          {lessons.map((lesson, index) => (
            <LessonOrb
              lesson={lesson}
              onPress={() =>
                router.push({
                  pathname: "/screens/lesson_screen",
                  params: { id: lesson.id },
                })
              }
              key={index}
            />
          ))}
        </ThemedView>
      </ThemedView>
    </SafeAreaProvider>
  );
}

function Header() {
  return (
    <ThemedView style={{ flex: 1, padding: 20 }}>
      <ThemedText style={{ fontSize: 48, fontWeight: "bold", lineHeight: 72 }}>
        Mente Prodigiosa
      </ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: "white",
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
});
