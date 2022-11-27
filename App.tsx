import { FC, useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, View, Text, ScrollView } from "react-native";

import AnimalCard from "./components/AnimalCard";

export type Animal = {
  id: number;
  name: string;
  animal_type: string;
  image_link: string;
  geo_range: string;
  diet: string;
};

const App: FC = () => {
  const [loading, setLoading] = useState(false);
  const [animals, setAnimals] = useState<Animal[]>([]);

  const fetchAnimals = (numberOfRecords: number) => {
    fetch(`https://zoo-animal-api.herokuapp.com/animals/rand/${numberOfRecords}`)
      .then((res) => res.json())
      .then((data: Animal[]) => {
        setAnimals([...data]);
      })
      .catch((err) => {
        console.log(`err`, err);
      });
  };

  useEffect(() => {
    try {
      setLoading(true);
      fetchAnimals(4);
    } catch (err) {
      console.log(`err`, err);
    }
    setLoading(false);
  }, []);

  const renderAnimals = animals?.map((animal: Animal) => (
    <AnimalCard data={animal} key={animal.id} />
  ));

  return (
    <View style={styles.container}>
      <Text style={styles.listTitle}>Couple of random animals:</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <ScrollView contentContainerStyle={styles.listContainer}>{renderAnimals}</ScrollView>
      )}
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
    marginTop: 50,
  },
  title: {
    fontSize: 24,
  },
  listContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    paddingTop: 20,
    paddingBottom: 100,
  },
  listTitle: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 20,
  },
});
