import { View, StyleSheet } from "react-native";
import { Header } from "../components/Header";
import { Description } from "../components/Description";

export const SimplePage = () => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Hello 😉" />
      <Description text="Lorem impsum..." />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default SimplePage;
