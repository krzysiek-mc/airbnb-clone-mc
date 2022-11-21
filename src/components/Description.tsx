import { Text, StyleSheet } from "react-native";

type Props = {
  text: string;
};

export const Description = ({ text, ...otherProps }: Props): JSX.Element => {
  return (
    <Text style={styles.description} {...otherProps}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  description: {
    color: "#999",
  },
});

export default Description;
