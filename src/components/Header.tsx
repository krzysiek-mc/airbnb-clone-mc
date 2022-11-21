import { Text, StyleSheet } from "react-native";

type Props = {
  title: string;
};

export const Header = ({ title, ...otherProps }: Props): JSX.Element => {
  return (
    <Text style={styles.header} {...otherProps}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  header: {
    textTransform: "uppercase",
    fontSize: 30,
  },
});

export default Header;
