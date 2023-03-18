import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../../ui/molecules";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { AccountSettings } from "../../ui/organisms";
import { EmailIcon, PictureIcon } from "../../ui/assets/icons";
import { COLORS } from "../../constants/theme";
import { View } from "react-native";
export default function AdvancedSettingsScreen() {
  const router = useNavigation();
  const advancedSettings = {
    heading: "",
    items: [
      {
        settingName: "Optimize Images for upload",
        settingIcon: <PictureIcon fill={COLORS.greyScale[600]} />,
        isToggled: true,
      },
      {
        settingName: "Dark Mode",
        settingIcon: <PictureIcon fill={COLORS.greyScale[600]} />,
        isToggled: false,
      },
      {
        settingName: "Set 24 hours",
        settingIcon: <EmailIcon fill={COLORS.greyScale[600]} />,
        isToggled: false,
      },
    ],
  };
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white px-6 ">
        <Topbar
          headerName="Advanced"
          goBackToPrevious={() => router.goBack()}
        />
        <View>
          <AccountSettings items={advancedSettings.items} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
