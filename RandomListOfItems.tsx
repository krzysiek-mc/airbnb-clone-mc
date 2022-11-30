import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/namespace
import { ScrollView, StyleSheet, Text, View } from "react-native";

import RandomItem from "./RandomItem";

export type User = {
  email: string;
  gender: string;
  login: {
    uuid: number;
  };
  dob: {
    age: number;
  };
};
export const RandomListOfItems = () => {
  const [loading, setLoading] = useState(false);
  const [randomUsers, setRandomUsers] = useState([]);

  const randomURL = "https://randomuser.me/api/?results=7";

  const fetchUsers = async () => {
    setLoading(() => true);
    try {
      await fetch(randomURL)
        .then((res) => res.json())
        .then((data) => setRandomUsers(data.results))
        .catch((err) => console.log(err))
        .finally(() => console.log("Fetching users ended"));
    } catch (error) {
      console.log("error", error);
    }
    setLoading(() => false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const randomUsersRender = randomUsers?.map((user) => {
    return <RandomItem data={user} key={user.login.uuid} />;
  });

  return (
    <View style={styles.container}>
      {loading ? (
        <Text style={styles.loadingText}>Loading data...</Text>
      ) : (
        <>
          <Text style={styles.title}>Random list of users</Text>
          <ScrollView>{randomUsersRender}</ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginBottom: 15,
    fontSize: 24,
  },
  loadingText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default RandomListOfItems;
