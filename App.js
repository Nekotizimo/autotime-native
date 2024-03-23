import { StrictMode } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable } from 'react-native';
import { TimerList } from './components/TimerList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome6 } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <StrictMode>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="TimerList" component={TimerList} 
              options={{ 
                title: 'AutoTime',
                headerRight: () => (
                  <Pressable onPress={() => alert('This is a button!')}>
                    <FontAwesome6 name="plus" size={20} color="black" />
                  </Pressable>
                ),
              }} />
          </Stack.Navigator>
        </NavigationContainer>
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
