import { StatusBar } from "expo-status-bar";
import React, { FC } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const App: FC = () => {
  const onPress = (value: string) => {
    // set breakepoint here
    console.log(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HELLO</Text>
      <Text>Lorem ipsum...</Text>
      <Button title="Test button" onPress={() => onPress("TEST 1234")} />
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
