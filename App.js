import { StrictMode } from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import { TimerList } from './components/TimerList';

export default function App() {
  

  return (
    <StrictMode>
      <SafeAreaView style={styles.container}>
        <TimerList></TimerList>
      </SafeAreaView>
    </StrictMode>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECECEC',
    justifyContent: 'center',
  },
});
