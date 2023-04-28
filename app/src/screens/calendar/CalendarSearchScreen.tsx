import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  CalendarEventSearchResultCard,
  Searchbar,
  Topbar,
} from "../../ui/molecules";
import { useForm } from "react-hook-form";
import { View } from "react-native";
import { CalendarSearchScreenProps } from "../../@types/navigation";

export default function CalendarSearchScreen({
  navigation,
}: CalendarSearchScreenProps) {
  const { control } = useForm();
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 px-6 bg-white">
        <Topbar
          headerName="Search"
          goBackToPrevious={() => navigation.goBack()}
        />
        <View className="mt-4">
          <Searchbar
            control={control}
            name="search"
            placeholder="Search Calendar Events"
          />
        </View>
        <View className="mt-3">
          <CalendarEventSearchResultCard />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
