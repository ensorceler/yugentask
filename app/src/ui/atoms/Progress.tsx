import { View } from "react-native";

interface Props {
  variant: string;
  progressValue: number;
}

export default function Progress({ progressValue }: Props) {
  return (
    <View className="w-full h-2 rounded-xl bg-primaryOrange/10">
      <View
        className="h-full rounded-xl bg-primaryOrange"
        style={{ width: `${progressValue}%` }}
      />
    </View>
  );
}
