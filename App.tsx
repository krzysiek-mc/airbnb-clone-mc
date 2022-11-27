import { StatusBar } from "expo-status-bar";
import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

type SimplePokemonData = {
  name: string;
  height: number;
  weight: number;
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
          <Text style={styles.title}>HELLO</Text>
          <Text>Lorem ipsum...</Text>
          <Text>
            {data.name} {data.height} {data.weight}
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
