import react from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import GlobalState from "./context/GlobalState";

export default function App() {
  return (
    <GlobalState>
      <Text>Hola mundo</Text>
    </GlobalState>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
