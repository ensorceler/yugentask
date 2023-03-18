import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../ui/molecules";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  useAnimatedGestureHandler,
  withSpring,
} from "react-native-reanimated";
import { View } from "react-native";
import { useEffect } from "react";
import { Button, Typography } from "../ui/atoms";
import {
  Gesture,
  GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from "react-native-gesture-handler";

const handleRotation = (progress: Animated.SharedValue<number>) => {
  "worklet";
  return `${progress.value * 2 * Math.PI}rad`;
};

type ContextInterface = {
  translateX: number;
  translateY: number;
};

export default function FolderScreen() {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextInterface
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event) => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
    onCancel: (event) => {},
  });

  const rStyle = useAnimatedStyle<any>(() => {
    return {
      transform: [
        { translateX: translateX.value },
        {
          translateY: translateY.value,
        },
      ],
    };
  }, []);
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white px-6">
        <Topbar headerName="Folder" variant="add" />
        <Button twClassName="flex justify-center items-center">
          <Typography fw="medium">View</Typography>
        </Button>
        <View className="flex-1 flex justify-center items-center">
          <PanGestureHandler onGestureEvent={panGestureEvent}>
            <Animated.View className="h-60 w-60 rounded-full border-2 border-primaryBlue-400 flex justify-center items-center">
              <Animated.View
                className="h-20 w-20 bg-primaryBlue-400 rounded-xl"
                style={rStyle}
              />
            </Animated.View>
          </PanGestureHandler>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
