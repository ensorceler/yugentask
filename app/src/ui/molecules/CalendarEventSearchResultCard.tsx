import { View } from "react-native";
import { Divider, Typography } from "../atoms";

const CalendarEventSearchResultCard = () => {
  return (
    <View>
      <View className="flex gap-y-3">
        <Typography fw="regular" twClassName="text-sm text-greyScale-600">
          Thu, 17 August
        </Typography>
        <View>
          <Divider />
        </View>
        <View className="flex flex-row gap-x-2">
          <View className="h-full w-0.5 bg-primaryRed rounded-xl" />
          <Typography fw="semiBold">
            Meeting with client from malaysis
          </Typography>
        </View>
        <View>
          <Divider />
        </View>
        <View className="flex flex-row gap-x-2">
          <View className="h-full w-0.5 bg-primaryOrange rounded-xl" />
          <Typography fw="semiBold">Meeting with David Alaba</Typography>
        </View>
      </View>
    </View>
  );
};

export default CalendarEventSearchResultCard;
