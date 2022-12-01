import { FC, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, ActivityIndicator, ScrollView } from "react-native";

import { UserData } from "./AppModal";

export interface Response {
  results: UserData[];
  info: any;
}

const App: FC = () => {
  const [users, setUsers] = useState<UserData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
      .then((res) => res.json())
      .then((res: Response) => {
        setLoading(false);
        setUsers(res.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loading]);

  return loading ? (
    <ActivityIndicator size="large" />
  ) : (
    <ScrollView contentContainerStyle={styles.container}>
      {users?.map((user) => {
        return (
          <View style={styles.card_template} key={user.id.value}>
            <Image
              style={styles.card_image}
              source={{
                uri: user.picture.large,
              }}
            />
            <View style={styles.text_container}>
              <Text style={styles.card_title}>
                {user.name.first} {user.name.last}
              </Text>
              <Text style={styles.card_title}>{user.email}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
  },

  card_template: {
    width: 250,
    height: 250,
    boxShadow: "10px 10px 17px -12px rgba(0,0,0,0.75)",
    margin: 6,
  },
  card_image: {
    width: 250,
    height: 250,
    borderRadius: 10,
  },
  text_container: {
    position: "absolute",
    width: 250,
    height: 60,
    bottom: 0,
    padding: 5,
    backgroundColor: "rgba(0,0,0, 0.3)",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  card_title: {
    color: "white",
  },
});
