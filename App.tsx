import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello</Text>
      <Text style={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error culpa at reprehenderit
        impedit doloribus perspiciatis inventore fugiat ab quam exercitationem!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: 300,
    fontSize: 30,
  },
  description: {
    width: 300,
    fontSize: 20,
  },
});
