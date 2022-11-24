/* eslint-disable import/namespace */
import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";

import CharactersList from "./app/components/CharactersList";

const App: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rick&Morty characters </Text>
      <View style={styles.list}>
        <CharactersList />
      </View>
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
  list: {
    padding: 10,
    height: "80%",
  },
});
