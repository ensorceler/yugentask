import { View } from "react-native";

interface Props {
  dir?: "horizontal" | "vertical";
  type?: "clean" | "line";
}

export default function Divider({ type, dir }: Props) {
  if (type === "clean") {
    return (
      <View
        aria-label="grey-divider"
        className="w-full h-2.5 bg-greyScale-100"
      />
    );
  }
  return (
    <View className="w-full h-0 border-0 border-t border-t-greyScale-200" />
  );
}
