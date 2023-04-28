import { View } from "react-native";
import twFusion from "../../utils/twFusion";

interface Props {
  variant: "orange" | "blue" | "green" | "red";
  progressValue: number;
}

export default function Progress({ progressValue, variant }: Props) {
  return (
    <View
      className={twFusion(
        "w-full h-2 rounded-xl bg-primaryOrange/10",
        variant === "orange" && "bg-primaryOrange/10 ",
        variant === "blue" && "bg-primaryBlue-400/10 ",
        variant === "green" && "bg-primaryGreen/10 ",
        variant === "red" && "bg-primaryRed/50 "
      )}
    >
      <View
        className={twFusion(
          "h-full rounded-xl",
          variant === "orange" && "bg-primaryOrange ",
          variant === "blue" && "bg-primaryBlue-400 ",
          variant === "green" && "bg-primaryGreen",
          variant === "red" && "bg-primaryRed "
        )}
        style={{ width: `${progressValue}%` }}
      />
    </View>
  );
}
