import { StatusBar } from "expo-status-bar";
import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type AbilityItem = {
  ability: { name: string };
};

type SimplePokemonData = {
  name: string;
  height: number;
  weight: number;
  abilities: AbilityItem[];
};

const App: FC = () => {
  const [data, setData] = useState<SimplePokemonData>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);

    try {
      const response = await (
        await fetch("https://pokeapi.co/api/v2/pokemon/6", { method: "GET" })
      ).json();

      setData(response);
      setLoading(false);
    } catch (err) {
      console.log("error from getData in App.tsx", err);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <>
          <Text>
            Hello, I am {data.name}, I am {data.height}cm tall and weight {data.weight}kg. My
            alibities are: {data.abilities[0]?.ability.name} and {data.abilities[1]?.ability.name}.
          </Text>
          <StatusBar style="auto" />
        </>
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
  },
  title: {
    fontSize: 24,
  },
});
