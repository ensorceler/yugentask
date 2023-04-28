import { View } from "react-native";
import { Typography } from "../atoms";
import { ClockIcon } from "../assets/icons";
import { COLORS } from "../../constants/theme";

interface Props {
  id?: string;
  title?: string;
  start_time?: string;
  end_time?: string;
  description?: string;
}

const CalendarTimelineEventCard = ({ title }: Props) => {
  return (
    <View className="px-2 py-3 h-full rounded-xl bg-primaryBlue-200 ">
      <View className="flex flex-row justify-between ">
        <Typography fw="medium" twClassName="text-black ">
          {title}
        </Typography>
        <View className="flex flex-row items-center">
          <ClockIcon fill={COLORS.primaryBlue[500]} height={18} width={18} />
          <Typography fw="regular" twClassName="text-xs">
            12:00 - 13:30
          </Typography>
        </View>
      </View>
    </View>
  );
};

export default CalendarTimelineEventCard;
