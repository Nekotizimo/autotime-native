import { StrictMode, useState, useEffect, createContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable } from 'react-native';
import { TimerList } from './components/TimerList';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import { TimerContext } from './TimerContext';

const Stack = createNativeStackNavigator();

class Timer { 
  constructor(name, durationInSeconds, id=uuidv4()) {
    this.name = name;
    this.durationInSeconds = durationInSeconds;
    this.id = id;
  }
}

const testTimers = [
  { name: "Poached Egg", durationInSeconds: 390, id: 1 },
  { name: "Plank", durationInSeconds: 45, id: 2 },
  { name: "how long i last", durationInSeconds: 5, id: 3 },
]

export default function App() {
  const [timers, setTimers] = useState(null);

  const getTimers = async () => {
    try {
      // await AsyncStorage.clear();
      const jsonValue = await AsyncStorage.getItem('timers');
      return jsonValue != null ? JSON.parse(jsonValue) : testTimers;
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    getTimers().then(setTimers);
  }, []);

  const storeTimers = async () => {
    try {
      console.log("store:", timers);
      const jsonValue = JSON.stringify(timers);
      await AsyncStorage.setItem('timers', jsonValue);
    } catch (e) {
      alert(e);
    }
  };
  useEffect(() => {
    if (timers != null) {
      storeTimers();
    }
      
  }, [timers]);

  const updateTimersName = (id, name) => {
    setTimers(timers.map(t => (t.id === id ? {...t, name: name} : t)));
  }
  const updateTimersDuration = (id, durationSecs) => {
    setTimers(timers.map(t => (t.id === id ? {...t, durationInSeconds: durationSecs} : t)));
  }

  const addTimer = () => {
    const newTimer = new Timer("New timer", 60)
    setTimers([...timers, newTimer]);
  }

  return (
    <StrictMode>
      <SafeAreaView style={styles.container}>
        <TimerContext.Provider value={{ timers, updateTimersDuration, updateTimersName }}>
          <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="TimerList" component={TimerList} 
                options={{ 
                  title: 'AutoTime',
                  headerRight: () => (
                    <Pressable onPress={addTimer}>
                      <FontAwesome6 name="plus" size={20} color="black" />
                    </Pressable>
                  )
                }} 
                />
            </Stack.Navigator>
          </NavigationContainer>
        </TimerContext.Provider>
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
