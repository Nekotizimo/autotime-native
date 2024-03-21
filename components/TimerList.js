import { useState } from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import TimerComponent from './TimerComponent';

const testTimers = [
  { name: "Poached Egg", durationInSeconds: 390, id: 1 },
  { name: "Plank", durationInSeconds: 45, id: 2 },
  { name: "how long i last", durationInSeconds: 5, id: 3 },
  { name: "how long i last", durationInSeconds: 5, id: 4 },
  { name: "how long i last", durationInSeconds: 5, id: 5 },
]

export function TimerList(props) {
  const [timers, setTimers] = useState(() => {
    return testTimers;
    // getting stored timers
    // const saved = localStorage.getItem("timers");
    // const initialValue = JSON.parse(saved);
    // return initialValue || [];
  });

  return (
    <View style={styles.container}>
      <FlatList 
        data={timers} 
        renderItem={({item}) => {
          const { name, durationInSeconds, id } = item;
          const time = new Date();
          time.setSeconds(time.getSeconds() + durationInSeconds);
          return <TimerComponent name={name} durationInSecs={durationInSeconds} // updateTimersName={updateTimersName}
            // updateTimersDuration={updateTimersDuration}
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
