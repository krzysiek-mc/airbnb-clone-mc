/* eslint-disable import/namespace */
import React, { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import Card from "./Card";

const CharactersList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.results))
      .catch((error) => console.log(`Error ${error}`));
  }, []);

  return (
    <View>
      <ScrollView>
        {characters.map(({ id, name, status, image }) => (
          <Card key={`rm-${id}`} name={name} status={status} pic={image} />
        ))}
      </ScrollView>
    </View>
  );
};

export default CharactersList;
