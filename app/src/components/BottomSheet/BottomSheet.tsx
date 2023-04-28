import * as React from "react";
import { Modal, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useDerivedValue,
} from "react-native-reanimated";

import {
  Gesture,
  GestureDetector,
  gestureHandlerRootHOC,
} from "react-native-gesture-handler";

import { DEVICE_HEIGHT, DEVICE_WIDTH } from "../../constants/theme";
import { useEffect, useState } from "react";
import { Button, Typography } from "../../ui/atoms";

type ContextType = {
  translateY: number;
};

interface BottomSheetProps {
  closeModal: () => void;
  children?: React.ReactElement | React.ReactNode;
}

const BottomSheet = ({ closeModal, children }: BottomSheetProps) => {
  const translateY = useSharedValue(0);

  const context = useSharedValue({ y: 0 });
  const followY = useDerivedValue(() => {
    return withSpring(translateY.value);
  });
  const gesture = Gesture.Pan()
    .onStart((event) => {
      context.value = { y: translateY.value };
    })
    .onUpdate((event) => {
      translateY.value = event.translationY + context.value.y;
      translateY.value = Math.max(translateY.value, -DEVICE_HEIGHT);
      translateY.value = Math.min(translateY.value, -DEVICE_HEIGHT / 3.5);
    })
    .onEnd(() => {
      if (translateY.value < -DEVICE_HEIGHT / 2) {
        translateY.value = withSpring(-DEVICE_HEIGHT, {
          damping: 20,
        });
      }
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: followY.value }],
    };
  });

  useEffect(() => {
    translateY.value = withSpring(-DEVICE_HEIGHT / 2.5);
  }, []);

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        className="absolute bg-greyScale-50 rounded-tl-3xl rounded-tr-3xl"
        style={[
          {
            height: DEVICE_HEIGHT + 50,
            width: DEVICE_WIDTH,
            top: DEVICE_HEIGHT,
          },
          rStyle,
        ]}
      >
        <View className="mt-4 w-24 h-1 ml-auto mr-auto bg-greyScale-300 rounded-lg "></View>
        {/**
         * 
         * 
        <Button
          onPress={closeModal}
          twClassName="mt-2 ml-auto mr-auto w-40 px-3 py-2 "
        >
          <Typography fw="regular" twClassName="text-white">
            Close
          </Typography>
        </Button>
         * 
         */}
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

// @ts-ignore
const BottomSheetWrapper: React.FC<BottomSheetProps> =
  // @ts-ignore
  gestureHandlerRootHOC(BottomSheet);

interface BottomSheetModalProps {
  children?: React.ReactElement;
  visible: boolean;
  closeModal: () => void;
}

export default function BottomSheetModal({
  visible,
  closeModal,
  children,
}: BottomSheetModalProps) {
  return (
    <Modal transparent={true} visible={visible}>
      <BottomSheetWrapper closeModal={closeModal}>
        {children}
      </BottomSheetWrapper>
    </Modal>
  );
}
