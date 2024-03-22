import { View, Pressable, StyleSheet } from 'react-native';

export function RoundPressable(props) {
  return (
    <Pressable style={[styles.button, ...props.style]} disabled={props.disabled} onPress={props.onPress}>
      {props.children}
      {props.disabled && <View style={[styles.overlay]} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    opacity: 0.3,
    backgroundColor: 'black',
  }
});