import { FlatList, Pressable, View } from "react-native";
import { ThemedView } from "./ThemedView";
import { ThemedText } from "./ThemedText";

export default function MathKeyboard({
  onButtonPressed,
}: {
  onButtonPressed: (name: string) => void;
}) {
  const handleButtonPress = (name: string) => {
    console.log("Button pressed");
    onButtonPressed(name);
  };
  const buttons = [
    {
      name: "f",
      symbol: "( )",
      onPress: () => handleButtonPress("parenthesis"),
    },
    {
      name: "f",
      symbol: "( )",
      onPress: () => handleButtonPress("parenthesis"),
    },
    {
      name: "f",
      symbol: "( )",
      onPress: () => handleButtonPress("parenthesis"),
    },
    {
      name: "f",
      symbol: "( )",
      onPress: () => handleButtonPress("parenthesis"),
    },
    {
      name: "f",
      symbol: "( )",
      onPress: () => handleButtonPress("parenthesis"),
    },
    {
      name: "delete",
      symbol: "<-",
      onPress: () => handleButtonPress("delete"),
    },
    {
      name: "parenthesis",
      symbol: "( )",
      onPress: () => handleButtonPress("parenthesis"),
    },
    {
      name: "greater_than",
      symbol: ">",
      onPress: () => handleButtonPress("greater_than"),
    },
    { name: "7", symbol: "7", onPress: () => handleButtonPress("7") },
    { name: "8", symbol: "8", onPress: () => handleButtonPress("8") },
    { name: "9", symbol: "9", onPress: () => handleButtonPress("9") },
    {
      name: "division",
      symbol: "/",
      onPress: () => handleButtonPress("division"),
    },
    {
      name: "fraction",
      symbol: "/",
      onPress: () => handleButtonPress("fraction"),
    },
    { name: "root", symbol: "√", onPress: () => handleButtonPress("root") },
    { name: "4", symbol: "4", onPress: () => handleButtonPress("4") },
    { name: "5", symbol: "5", onPress: () => handleButtonPress("5") },
    { name: "6", symbol: "6", onPress: () => handleButtonPress("6") },
    {
      name: "multiplication",
      symbol: "x",
      onPress: () => handleButtonPress("multiplication"),
    },
    {
      name: "exponent",
      symbol: "^2",
      onPress: () => handleButtonPress("exponent"),
    },
    {
      name: "literal",
      symbol: "X",
      onPress: () => handleButtonPress("literal"),
    },
    { name: "1", symbol: "1", onPress: () => handleButtonPress("1") },
    { name: "2", symbol: "2", onPress: () => handleButtonPress("2") },
    { name: "3", symbol: "3", onPress: () => handleButtonPress("3") },
    {
      name: "difference",
      symbol: "-",
      onPress: () => handleButtonPress("difference"),
    },
    { name: "pi", symbol: "π", onPress: () => handleButtonPress("pi") },
    {
      name: "percentage",
      symbol: "%",
      onPress: () => handleButtonPress("percentage"),
    },
    { name: "0", symbol: "0", onPress: () => handleButtonPress("0") },
    { name: "dot", symbol: ".", onPress: () => handleButtonPress("dot") },
    { name: "equals", symbol: "=", onPress: () => handleButtonPress("equals") },
    { name: "plus", symbol: "+", onPress: () => handleButtonPress("plus") },
  ];
  return (
    <FlatList
      style={{  }}
      data={buttons}
      keyExtractor={(item) => item.name}
      numColumns={6}
      renderItem={({ item }) => (
        <KeyboardButton item={item} onPress={item.onPress} />
      )}
    />
  );
}

function KeyboardButton({ item, onPress }: { item: any; onPress: () => void }) {
  return (
    <Pressable
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 12,
        borderWidth: 1,
        borderColor: "#f0f0f0",
      }}
      onPress={() => onPress()}
    >
      <ThemedText>{item.symbol}</ThemedText>
    </Pressable>
  );
}
