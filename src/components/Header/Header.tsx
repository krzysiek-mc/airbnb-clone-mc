import { StyleSheet, Text } from "react-native";

interface Props {
  text: string;
}

const Header = ({ text }: Props) => <Text style={styles.header}>{text}</Text>;

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
