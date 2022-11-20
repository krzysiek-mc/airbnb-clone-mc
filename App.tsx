import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./src/components/Header/Header";

const App = () => {
  return (
    <View style={styles.container}>
      <Header text="Hello" />
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At tenetur, quisquam accusamus
        laborum, quaerat beatae laboriosam cumque tempore delectus minus, libero voluptatum nesciunt
        quia cum consequatur. Saepe nulla magni ratione?
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
