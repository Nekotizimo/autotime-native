import { useState } from 'react';
import { StyleSheet, View } from 'react-native'
import { Picker } from '@react-native-picker/picker';

const DurationPicker = (props) => {
  const [selectedMinute, setSelectedMinute] = useState();
  const [selectedSecond, setSelectedSecond] = useState();

  return (
    <View style={styles.container}>
      <Picker
        itemStyle={{ lineHeight: 10, color: 'red' }}
        selectedValue={selectedMinute}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedMinute(itemValue)
        }>
        <Picker.Item label="01" value={1} />
        <Picker.Item label="02" value={2} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: 100,
    // height: 100,
    zIndex: 10,
    borderWidth: 1
  }
})

export default DurationPicker;