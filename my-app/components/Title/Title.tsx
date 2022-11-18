import { FC } from 'react';
import { StyleSheet, Text } from 'react-native';

interface TitleProps {
  title: string;
}

const Title: FC<TitleProps> = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});
