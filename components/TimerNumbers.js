import { React, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import durationToText from "../utilities/durationToText";
import textToDurationSecs from '../utilities/textToDurationSecs';
import * as Typography from '../styles/typography'
import { FontAwesome6 } from '@expo/vector-icons';

const TimerNumbers = (props) => {
  const [durationText, setDurationText] = useState(durationToText(props.totalSeconds));

  const onChangeText = (e) => {
    setDurationText(e);
  }

  const onEndEditing = (e) => {
    const newDuration = textToDurationSecs(e.nativeEvent.text);
    if (newDuration === undefined) { // invalid newDuration
      props.setTimerDuration(props.durationInSecs); // use previous duration
      alert("invalid time"); // TODO : notification
    } else {
      props.setTimerDuration(newDuration); 
      setDurationText(durationToText(newDuration));
    }
  }

  return (
    <View style={styles.layout}>
      <TextInput
        style={[styles.textInput, Typography.h2]}
        readOnly={props.started}
        value={durationText}
        onEndEditing={onEndEditing}
        onChangeText={onChangeText}
      />
      {!props.started && <FontAwesome6 name="edit" size={16} color="gray" style={{width: 16}}/>}
    </View>
  )
    // <div className='timer-numbers editable'>
    //   <ContentEditable 
    //     disabled={props.started} 
    //     innerRef={timeCERef} 
    //     html={durationToText(props.totalSeconds)}
    //     onBlur={handleTimeBlur} 
    //     className='content-editable' 
    //     tagName="h2" />
    {/* {!props.started && <FontAwesomeIcon icon={faEdit} fixedWidth pull="right" color='gray' />} */}
  // </div>);
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  textInput: {
    flex: 1
  }
});

export default TimerNumbers;
