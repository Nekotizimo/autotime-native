import { React } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Typography from '../styles/typography'
import durationToText from '../utilities/durationToText'

const TimerNumbers = (props) => {
  return (
    <View style={styles.layout}>
      <Text style={[styles.text, Typography.h2]}>{durationToText(props.totalSeconds)}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    flex: 1
  }
});

export default TimerNumbers;
