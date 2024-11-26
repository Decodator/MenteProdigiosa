import { Pressable, View } from "react-native";
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lesson from "@/app/data/lesson";

export default function LessonOrb({
  lesson,
  onPress,
}: {
  lesson: Lesson;
  onPress: () => void;
}) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={{
          padding: 18,
          backgroundColor: "lightgrey",
          borderRadius: 200,
          width: 54,
          aspectRatio: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MaterialCommunityIcons name="home" size={24} color={"black"} />
      </View>
    </Pressable>
  );
}
