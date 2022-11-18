import { FC } from 'react';
import { StyleSheet, Text} from 'react-native';

interface DescriptionProps {
  description: string;
}

const Description: FC<DescriptionProps> = ({ description }) => {
  return <Text style={styles.description}>{description}</Text>;
};
export default Description;

const styles = StyleSheet.create({
  description: {
    color: '#0c0a0a',
  },
});
