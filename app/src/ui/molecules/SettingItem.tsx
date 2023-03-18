import { Pressable, Switch, View } from "react-native";
import { ProfileFilledIcon, RightArrowIcon } from "../assets/icons";
import { COLORS } from "../../constants/theme";
import { Divider, Typography } from "../atoms";
import { useNavigation } from "@react-navigation/native";

interface Props {
  name: string;
  icon: any;
  isToggled?: boolean;
  fn?: () => void;
}

export default function SettingItem({ name, icon, isToggled, fn }: Props) {
  const router = useNavigation<any>();
  return (
    <View className="mt-3">
      <Pressable onPress={fn}>
        <View
          aria-label="Profile Settings"
          className="mb-4 flex flex-row items-center justify-between"
        >
          <View className="flex flex-row items-center gap-4">
            <View className="bg-greyScale-100 p-2 rounded-lg">
              {icon && icon}
            </View>
            <Typography fw="medium" twClassName="text-base">
              {name}
            </Typography>
          </View>
          {isToggled !== undefined ? (
            <Switch />
          ) : (
            <RightArrowIcon className="text-greyScale-600" />
          )}
        </View>
      </Pressable>
      <Divider />
    </View>
  );
}
