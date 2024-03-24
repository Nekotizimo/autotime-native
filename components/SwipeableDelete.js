import { View, Text, Animated, StyleSheet } from 'react-native';
import { Swipeable, RectButton } from 'react-native-gesture-handler';

export const SwipeableDelete = (props) => {

  const renderRightAction = (text, color, x, progress) => {
    const trans = progress.interpolate({
      inputRange: [0, 1],
      outputRange: [x, 0],
    });

    return (
      <Animated.View style={{ flex: 1, transform: [{ translateX: trans }] }}>
        <RectButton
          style={[styles.rightAction, { backgroundColor: color }, ...props.style]}
          onPress={props.onPress}>
          <Text style={styles.actionText}>{text}</Text>
        </RectButton>
      </Animated.View>
    );
  };

  const renderRightActions = (progress, _dragAnimatedValue) => (
    <View
      style={{
        width: 128,
        flexDirection: 'row',
      }}>
      {renderRightAction('Delete', '#dd2c00', 128, progress)}
    </View>
  );

  return (
    <Swipeable style={props.style} 
      renderRightActions={renderRightActions} enableTrackpadTwoFingerGesture={true}>
      {props.children}
    </Swipeable>
  )
}

const styles = StyleSheet.create({
  actionText: {
    color: 'white',
    fontSize: 16,
    backgroundColor: 'transparent',
    padding: 10,
  },
  rightAction: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
})