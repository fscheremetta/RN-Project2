import { StyleSheet, ImageBackground, View } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
// import LinearGradient from "react-native-linear-gradient";

export default function App() {
  return (
    <View colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <StartGameScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    backgroundColor: "#ddb52f",
    flex: 1,
  },
});
