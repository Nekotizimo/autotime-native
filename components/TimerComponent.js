import { useState } from 'react';
import { View, Text, StyleSheet, Button, Pressable } from 'react-native';
import { useTimer } from 'react-timer-hook';
import TimerName from './TimerName.js';
import TimerNumbers from './TimerNumbers';
import * as Spacing from '../styles/spacing.js'
import { FontAwesome6 } from '@expo/vector-icons';
import { RoundPressable } from './RoundPressable.js';

const TimerComponent = (props) => {
  const [started, setStarted] = useState(false);
  const [over, setOver] = useState(false);
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({
    expiryTimestamp: props.expiryTimestamp,
    onExpire: () => {
      setOver(true);
    },
    autoStart: false
  });

  const handleStart = () => {
    setOver(false);
    if (started) {
      resume();
    } else {
      start();
      setStarted(true);
    }
  };
  const handlePause = () => {
    pause();
  };
  const handleStop = () => {
    setStarted(false);
    setOver(false);
    const time = new Date();
    time.setSeconds(time.getSeconds() + props.durationInSecs); // 6:30 minutes timer
    restart(time, false);
  }
  const setTimerDuration = (newDurationSecs) => {
    const time = new Date();
    time.setSeconds(time.getSeconds() + newDurationSecs);
    restart(time, false);
    props.updateTimersDuration(props.id, newDurationSecs);
  }
  const setTimerName = (name) => {
    props.updateTimersName(props.id, name);
  }

  return (
    <View style={styles.timerBox}>
      <View style={[Spacing.margin, styles.timerInnerBox]}>
        <View style={[styles.nameNumberContainer]}>
          <TimerName
            started={started}
            name={props.name}
            setTimerName={setTimerName}
            setTimerDuration={setTimerDuration}
            id={props.id}>
          </TimerName>
          <TimerNumbers
            started={started}
            totalSeconds={totalSeconds}
            durationInSecs={props.durationInSecs}
            restart={restart}
            setTimerDuration={setTimerDuration}
            id={props.id}>
          </TimerNumbers>
        </View>
        <View style={[styles.buttonContainer]}>
          <RoundPressable style={[styles.stopButton]} disabled={!started} onPress={handleStop}>
            <FontAwesome6 name="stop" size={20} color="white" />
          </RoundPressable>
          {isRunning ?
          <RoundPressable style={[styles.pauseButton]} disabled={false} onPress={handlePause}>
            <FontAwesome6 name="pause" size={20} color="white" />
          </RoundPressable>
          :
          <RoundPressable style={[styles.playButton]} disabled={over} onPress={handleStart}>
            <FontAwesome6 name="play" size={20} color="white" style={{ paddingLeft: 2 }} />
          </RoundPressable>
          }
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  timerBox: {
    flex: 1,
    backgroundColor: '#FCFCFC',
    height: 100,
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 15,
  },
  timerInnerBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameNumberContainer: {
    flex: 1,
  },
  buttonContainer: {
    width: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  stopButton: {
    backgroundColor: 'red'
  },
  pauseButton: {
    backgroundColor: 'orange'
  },
  playButton: {
    backgroundColor: 'green'
  }
});

export default TimerComponent;