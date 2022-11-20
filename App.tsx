import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Title from './components/Title/Title';
import Description from './components/Description/Description';

export default function App() {
  return (
    <View>
      <Title title={'Title'} />
      <Description
        description={
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry'
        }
      />
    </View>
  );
}
