import { View } from "react-native";
import { Chip, Divider, Typography } from "../atoms";
import { Popover } from "../molecules";
import AvatarGroup from "../atoms/AvatarGroup";
import { CalendarFilledIcon, ClockIcon } from "../assets/icons";
import { COLORS } from "../../constants/theme";

const CalendarDetailCard = () => {
  return (
    <View className="w-full p-3 bg-greyScale-50  rounded-xl shadow-xl">
      {/** uppper portion */}
      <View className="flex gap-y-2 mb-4">
        <View className="flex flex-row justify-between items-center">
          <Typography fw="semiBold" twClassName="text-base">
            Meeting with the client
          </Typography>
          <Popover />
        </View>
        {/** team */}
        <View className="flex flex-row justify-between items-center">
          <Chip chipText="Product Team" variant="orange" />
          <AvatarGroup />
        </View>
        {/** description */}

        <View>
          <Typography fw="regular" twClassName="text-greyScale-600">
            - Discuss with the projects - Discuss salary - Payment
          </Typography>
        </View>
      </View>

      {/** divider */}
      <Divider />
      {/** lower portion */}
      <View className="flex gap-y-4">
        <View className="flex gap-y-2">
          <Typography fw="regular">Assigned by</Typography>
          <View className="flex flex-row gap-x-4">
            <Typography fw="medium" twClassName="text-lg">
              Mia Huitema
            </Typography>
          </View>
        </View>
        <View className="flex gap-y-2">
          <View className="flex flex-row gap-x-3 items-center">
            <CalendarFilledIcon fill={COLORS.primaryBlue[400]} />
            <Typography fw="medium">Monday, 20 August 2021</Typography>
          </View>
          <View className="flex flex-row gap-x-3 items-center">
            <ClockIcon fill={COLORS.primaryBlue[400]} />
            <Typography fw="medium">09:00 - 09:30 (WIB Time)</Typography>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CalendarDetailCard;
