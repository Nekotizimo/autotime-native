import { useContext } from 'react';
import { View, FlatList, StyleSheet, StatusBar } from 'react-native';
import TimerComponent from './TimerComponent';
import { TimerContext } from '../TimerContext';

export function TimerList(props) {
  const { timers, updateTimersDuration, updateTimersName } = useContext(TimerContext);
  // TODO: seems slow?

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
