import { View } from "react-native";
import Typography from "./Typography";

const AvatarGroup = () => {
  return (
    <View className="flex flex-row relative ">
      <View className="h-7 w-7 rounded-full bg-red-300"></View>
      <View className="h-7 w-7 rounded-full bg-green-300 relative right-2"></View>
      <View className="h-7 w-7 rounded-full bg-blue-300 relative right-4"></View>
      <View className="h-7 w-7 rounded-full bg-neutral-300 relative right-6 flex justify-center items-center">
        <Typography fw="medium" twClassName="text-xs">
          +2
        </Typography>
      </View>
    </View>
  );
};

export default AvatarGroup;
