import { Pressable, View } from "react-native";
import Typography from "./Typography";
import twFusion from "../../utils/twFusion";

interface Props {
  active?: boolean;
}

const CalendarDayChip = ({ active }: Props) => {
  return (
    <Pressable
      className={twFusion(
        `p-3 w-max relative rounded-2xl flex items-center gap-y-0.5 border border-greyScale-200`,
        active && "border-primaryBlue-400 bg-primaryBlue-50"
      )}
    >
      <Typography
        fw="regular"
        twClassName={twFusion(
          `text-greyScale-600 text-xs`,
          active && "text-primaryBlue-400"
        )}
      >
        Mon
      </Typography>
      <Typography fw="semiBold" twClassName="text-base">
        20
      </Typography>

      {active && (
        <View className="absolute bottom-1.5">
          <View className="bg-primaryBlue-400 rounded-full h-1 w-1" />
        </View>
      )}
    </Pressable>
  );
};

export default CalendarDayChip;
