import { View } from "react-native";
import { Typography } from "../atoms";
import { COLORS } from "../../constants/theme";

export default function NotificationCard() {
  return (
    <View
      className="w-full px-3 py-3 rounded-xl bg-greyScale-50 "
      style={{
        elevation: 10,
        shadowColor: COLORS.greyScale[600],
      }}
    >
      <View className="flex flex-row items-center">
        <View className="h-10 w-10 mr-3 bg-greyScale-600 rounded-full " />
        <View className="flex-1">
          <Typography fw="regular">
            Jessica Jane mentioned you on Apps Project
          </Typography>
        </View>
      </View>
      <View className="ml-10 mt-3 ">
        <Typography fw="regular" twClassName="text-sm text-greyScale-500">
          Today at 8:32 AM : Apps Project/Home
        </Typography>
      </View>
    </View>
  );
}
