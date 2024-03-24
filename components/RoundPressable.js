import { View, Pressable, StyleSheet } from 'react-native';

export function RoundPressable(props) {
  return (
    <Pressable style={[styles.button, {width: props.size, height: props.size, borderRadius: props.size / 2}, ...props.style]} 
      disabled={props.disabled} onPress={props.onPress}>
      {props.children}
      {props.disabled && <View style={[styles.overlay, {width: props.size, height: props.size, borderRadius: props.size / 2}]} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.3,
    backgroundColor: 'black',
  }
});