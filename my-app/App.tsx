import { StyleSheet, View } from 'react-native';
import Description from './components/Description/Description';
import Title from './components/Title/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title title="Tytuł" />
      <Description description="opis" />
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
});
