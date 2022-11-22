import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HELLO ADAM</Text>
      <Text>Lorem ipsum...</Text>
      <StatusBar style="auto" />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },
});
