import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../ui/molecules";
import { NotificationScreenProps } from "../@types/navigation";
import NotificationCard from "../ui/molecules/NotificationCard";
import { View } from "react-native";
import twFusion from "../utils/twFusion";
import { Typography } from "../ui/atoms";
import { MoreIcon } from "../ui/assets/icons";
import { COLORS } from "../constants/theme";

export default function NotificationScreen({
  navigation,
}: NotificationScreenProps) {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white px-6 py-4">
        <Topbar
          headerName="Notification"
          goBackToPrevious={() => navigation.goBack()}
        />
        <View className="flex flex-row justify-between mt-4">
          <Typography fw="medium" twClassName="text-lg">
            Unread [2]
          </Typography>
          <MoreIcon fill={COLORS.greyScale[900]} className="" />
        </View>
        <View className={twFusion("flex gap-y-4", "mt-4")}>
          <View>
            <NotificationCard />
          </View>
          <View>
            <NotificationCard />
          </View>
          <View>
            <NotificationCard />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
