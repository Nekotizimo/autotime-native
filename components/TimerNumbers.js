import { React, useState } from 'react';
import { View, TextInput } from 'react-native';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit } from '@fortawesome/free-regular-svg-icons';
import durationToText from "../utilities/durationToText";
import textToDurationSecs from '../utilities/textToDurationSecs';

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
    <View>
      <TextInput
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

export default TimerNumbers;
