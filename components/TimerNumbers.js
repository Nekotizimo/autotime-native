import { React, useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
import durationToText from "../utilities/durationToText";
import textToDurationSecs from '../utilities/textToDurationSecs';
import * as Typography from '../styles/typography'

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
    flex: 1
  },
  textInput: {
    flex: 1
  }
})

export default TimerNumbers;
