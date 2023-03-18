import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../../ui/atoms";
import { View } from "react-native";
import {
  EmailIcon,
  LockIcon,
  NotificationIcon,
  ProfileFilledIcon,
  SettingsIcon,
} from "../../ui/assets/icons";
import { COLORS } from "../../constants/theme";
import { AccountSettings } from "../../ui/organisms";
import { useNavigation } from "@react-navigation/native";
import { ProfileMainScreenProps } from "../../@types/navigation";
import twFusion from "../../utils/twFusion";

const notificationSettingsData = {
  heading: "",
  items: [
    {
      settingName: "Push Notification",
      settingIcon: <NotificationIcon fill={COLORS.greyScale[600]} />,
      isToggled: true,
    },
    {
      settingName: "Email Notification",
      settingIcon: <EmailIcon fill={COLORS.greyScale[600]} />,
      isToggled: false,
    },
  ],
};

export default function ProfileScreen({ navigation }: ProfileMainScreenProps) {
  const accountSettingsData = {
    heading: "ACCOUNT SETTINGS",
    items: [
      {
        settingName: "Profile",
        settingIcon: <ProfileFilledIcon fill={COLORS.greyScale[600]} />,
        settingFn: () => {
          navigation.navigate("profile_settings");
        },
      },
      {
        settingName: "Reset Password",
        settingIcon: <LockIcon fill={COLORS.greyScale[600]} />,
        settingFn: () => {
          navigation.navigate("profile_reset_password");
        },
      },
      {
        settingName: "Advanced",
        settingIcon: <SettingsIcon fill={COLORS.greyScale[600]} />,
        settingFn: () => {
          navigation.navigate("profile_advanced");
        },
      },
    ],
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white py-4">
        <View aria-label="header" className="px-6  pb-4">
          <Typography fw="semiBold" twClassName="text-2xl">
            Profile
          </Typography>
          <View
            aria-label="profile_info"
            className="mt-4 flex flex-row items-center"
          >
            <View className="bg-greyScale-300 h-16 w-16 rounded-full mr-4"></View>
            <View className="flex items-start">
              <Typography fw="medium" twClassName="text-lg">
                Shakil Ahmed
              </Typography>
              <Typography fw="regular" twClassName="text-greyScale-600">
                shakilroot66@gmail.com
              </Typography>
            </View>
          </View>
        </View>
        {/** grey divider, gives a cleaner look*/}
        <View
          aria-label="grey-divider"
          className="w-full h-3 bg-greyScale-100"
        />
        <View className={twFusion("px-6 py-3 flex-col gap-y-2", "mt-2")}>
          <View>
            <AccountSettings
              heading="ACCOUNT SETTINGS"
              items={accountSettingsData.items}
            />
          </View>
          <View>
            <AccountSettings
              heading="NOTIFICATION"
              items={notificationSettingsData.items}
            />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
