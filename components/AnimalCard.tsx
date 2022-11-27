import React, { FunctionComponent } from "react";
import { StyleSheet, Image, Text, View } from "react-native";

import { Animal } from "../App";

interface AnimalCardProps {
  data: Animal;
}

const AnimalCard: FunctionComponent<AnimalCardProps> = ({
  data: { name, animal_type, image_link, geo_range, diet },
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.descContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.type}>{animal_type}</Text>
        <Text style={styles.info} numberOfLines={2}>
          Lives in {geo_range}, eats {diet}
        </Text>
      </View>
      <View style={styles.photoContainer}>
        <Image source={{ uri: image_link }} style={styles.photo} />
      </View>
    </View>
  );
};

export default AnimalCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "95%",
    borderBottomWidth: 2,
    borderColor: "rgba(34, 192, 63, 0.597)",
    borderWidth: 1,
    marginVertical: 10,
    height: 350,
    overflow: "hidden",
  },
  descContainer: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 21,
  },
  type: { textAlign: "center", fontSize: 15, fontStyle: "italic" },
  info: {
    fontSize: 18,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  photoContainer: {
    width: "100%",
    backgroundColor: "rgba(34, 192, 63, 0.597)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "70%",
  },
  photo: {
    width: "100%",
    height: "100%",
  },
});
