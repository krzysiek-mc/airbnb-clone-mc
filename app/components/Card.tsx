/* eslint-disable import/namespace */
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const Card = ({ pic, name, status }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{ uri: pic }} />
      <Text>Name: {name}</Text>
      <Text>Status: {status}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: { margin: 10, alignItems: "center", justifyContent: "center" },
  img: {
    width: 100,
    height: 100,
    alignItems: "center",
  },
});
