import { StatusBar } from "expo-status-bar";
import { useEffect, useState, useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

const App = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }, [users]);

  const getUsers = useCallback(async () => {
    try {
      const response = await fetchData();
      setUsers(response);
    } catch (e) {
      console.error("error getting users", e);
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);
    getUsers().then(() => setLoading(false));
  }, [users]);

  const renderItem = ({ item }: { item: User }) => (
    <View key={item.id} style={styles.userContainer}>
      <Text>{item.name}</Text>
    </View>
  );

  const renderSeparatorComponent = () => <View style={styles.separator} />;
  const renderEmptyComponent = () =>
    loading ? <Text>Loading...</Text> : <Text>No users found</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        renderItem={renderItem}
        data={users}
        ListEmptyComponent={renderEmptyComponent}
        contentContainerStyle={styles.container}
        ItemSeparatorComponent={renderSeparatorComponent}
      />
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
  userContainer: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
  separator: {
    height: 10,
  },
});
