import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Typography } from "../ui/atoms";
import { Topbar } from "../ui/molecules";

export default function CalendarScreen() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white px-6">
        <Topbar variant="search_add" headerName="Calendar" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
