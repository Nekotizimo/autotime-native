import { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import TimerComponent from './TimerComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';

const testTimers = [
  { name: "Poached Egg", durationInSeconds: 390, id: 1 },
  { name: "Plank", durationInSeconds: 45, id: 2 },
  { name: "how long i last", durationInSeconds: 5, id: 3 },
]

export function TimerList(props) {
  const [timers, setTimers] = useState(null);

  const getTimers = async () => {
    try {
      await AsyncStorage.clear();
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
  // const addTimer = () => {
  //   const newTimer = new Timer("New timer", 60)
  //   setTimers([...timers, newTimer]);
  // }

  return (
    <View style={styles.container}>
      <FlatList 
        data={timers} 
        renderItem={({item}) => {
          const { name, durationInSeconds, id } = item;
          const time = new Date();
          time.setSeconds(time.getSeconds() + durationInSeconds);
          return <TimerComponent name={name} durationInSecs={durationInSeconds} updateTimersName={updateTimersName}
            updateTimersDuration={updateTimersDuration}
            id={id} key={id} expiryTimestamp={time} />;
          }} 
        keyExtractor={timer => timer.id} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10
  },
});
