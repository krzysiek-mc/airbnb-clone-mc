import React from "react";
import { Text, TextProps, StyleSheet, View } from "react-native";

interface Props {
  title: string;
  capitalizeText?: boolean;
}

export const Header = ({
  title,
  capitalizeText,
  ...other
}: Props & TextProps): JSX.Element => (
  <Text
    style={[styles.headerFontSize, capitalizeText && styles.upperCase]}
    {...other}
  >
    {title}
  </Text>
);

const styles = StyleSheet.create({
  headerFontSize: {
    fontSize: 32,
  },
  upperCase: {
    textTransform: "uppercase",
  },
});
