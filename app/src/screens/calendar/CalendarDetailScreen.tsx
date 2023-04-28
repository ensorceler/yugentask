import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../../ui/molecules";
import CalendarDetailCard from "../../ui/organisms/CalendarDetailCard";
import { View } from "react-native";
import { CalendarDetailScreenProps } from "../../@types/navigation";
export default function CalendarDetailScreen({
  navigation,
}: CalendarDetailScreenProps) {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white px-6">
        <Topbar
          headerName="Detail"
          goBackToPrevious={() => {
            navigation.goBack();
          }}
        />
        <View className="mt-6">
          <CalendarDetailCard />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
