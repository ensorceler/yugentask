import { Gesture, GestureDetector } from "react-native-gesture-handler";
import React from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import Typography from "./Typography";

interface Props {
  children: React.ReactElement;
}
const RippleButton = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);
  const context = useSharedValue({ x: 0, y: 0 });
  const scale = useSharedValue(1);

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  const longPressGesture = Gesture.LongPress()
    .minDuration(500)
    .onStart((event) => {
      scale.value = 0.85;
    })
    .onEnd(() => {})
    .onTouchesCancelled(() => {});

  const dragGesture = Gesture.Pan()
    .activateAfterLongPress(500)
    .onStart((event) => {
      context.value = { x: translateX.value, y: translateY.value };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd(() => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
      scale.value = withSpring(1);
    });

  const composed = Gesture.Simultaneous(longPressGesture, dragGesture);

  return (
    <GestureDetector gesture={composed}>
      <Animated.View className="border rounded-xl px-4 py-2" style={[rStyle]}>
        <Typography fw="medium">Ripple</Typography>
      </Animated.View>
    </GestureDetector>
  );
};
export default RippleButton;
