import { View } from "react-native";
import Typography from "./Typography";
import twFusion from "../../utils/twFusion";

interface Props {
  variant: "orange" | "blue" | "green" | "red";
  chipText: string;
}

export default function Chip({ variant, chipText }: Props) {
  return (
    <View
      className={twFusion(
        "w-fit py-2 px-3 rounded-2xl active:scale-95",
        variant === "orange" && "bg-primaryOrange/10 ",
        variant === "blue" && "bg-primaryBlue-400/10 ",
        variant === "green" && "bg-primaryGreen/10 ",
        variant === "red" && "bg-primaryRed/10 "
      )}
      style={{}}
    >
      <Typography
        fw="medium"
        twClassName={twFusion(
          "text-sm",
          variant === "orange" && "text-primaryOrange",
          variant === "blue" && "text-primaryBlue-400",
          variant === "green" && "text-primaryGreen",
          variant === "red" && "text-primaryRed"
        )}
      >
        {chipText}
      </Typography>
    </View>
  );
}
