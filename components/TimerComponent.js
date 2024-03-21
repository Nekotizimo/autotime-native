import { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useTimer } from 'react-timer-hook';
import TimerName from './TimerName.js';
import TimerNumbers from './TimerNumbers';
import * as Spacing from '../styles/spacing.js'

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
          <Button 
            style={{ width: 50, height: 50 }}
            title="hi :)"
          />
          {/* <button
            className="btn stop-btn"
            disabled={!started}
            onClick={handleStop}></button>
          {!isRunning &&
            <button
              className="btn start-btn"
              disabled={over}
              onClick={handleStart}></button>}
          {isRunning &&
            <button
              className="btn pause-btn"
              onClick={handlePause}></button>} */}
        </View>
      </View>
    </View>
  );

//   return (
//     <div className="timer">
//       <div>
//         <TimerName
//           started={started}
//           name={name}
//           setTimerName={setTimerName}
//           setTimerDuration={setTimerDuration}
//           id={id}>
//         </TimerName>
//         <TimerNumbers 
//           started={started} 
//           totalSeconds={totalSeconds} 
//           durationInSecs={props.durationInSecs}
//           restart={restart}
//           setTimerDuration={setTimerDuration}
//           id={id}>
//         </TimerNumbers>
//       </div>
//       <div className='btn-container'>
//         <button
//           className="btn stop-btn"
//           disabled={!started}
//           onClick={handleStop}></button>
//         {!isRunning &&
//           <button
//             className="btn start-btn"
//             disabled={over}
//             onClick={handleStart}></button>}
//         {isRunning &&
//           <button
//             className="btn pause-btn"
//             onClick={handlePause}></button>}
//       </div>
//     </div>
//   )
};

const styles = StyleSheet.create({
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
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1
  },
  nameNumberContainer: {
    flex: 1,
    borderWidth: 1
  },
  buttonContainer: {
    borderWidth: 1,
    width: 100
  }
});

export default TimerComponent;