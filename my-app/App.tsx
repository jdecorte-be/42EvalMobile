import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './components/avatar';

export default function App() {
  return (
    <View style={styles.container}>
      <Avatar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0F13',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
