import Toast, { BaseToastProps, BaseToast } from "react-native-toast-message";
import { COLORS, DEVICE_WIDTH } from "../constants/theme";
import { View } from "react-native";
import { Typography } from "../ui/atoms";
import { CheckIcon, ShieldCloseIcon } from "../ui/assets/icons";

interface CustomToastProps extends BaseToastProps {
  text1: string;
  text2: string;
}

export const toastConfig = {
  success: ({ text1, text2 }: BaseToastProps) => (
    <View
      className="p-4 bg-primaryBlue-50 rounded-xl flex gap-y-2"
      style={{ width: DEVICE_WIDTH * 0.8 }}
    >
      <View className="flex flex-row gap-x-2">
        <CheckIcon className="text-primaryGreen" />
        <Typography fw="medium" twClassName="text-base">
          {text1}
        </Typography>
      </View>
      <Typography fw="regular" twClassName="text-sm">
        {text2}
      </Typography>
    </View>
  ),
  error: ({ text1, text2 }: BaseToastProps) => (
    <View
      className="p-4 bg-primaryBlue-50 rounded-xl flex gap-y-2"
      style={{ width: DEVICE_WIDTH * 0.8 }}
    >
      <View className="flex flex-row gap-x-2">
        <ShieldCloseIcon className="text-primaryRed" />
        <Typography fw="medium" twClassName="text-base text-red-400">
          {text1}
        </Typography>
      </View>
      <Typography fw="regular" twClassName="text-sm">
        {text2}
      </Typography>
    </View>
  ),
};
