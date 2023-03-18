import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../../ui/molecules";
import { ResetPasswordScreenProps } from "../../@types/navigation";

export default function ResetPasswordScreen({
  navigation,
}: ResetPasswordScreenProps) {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white px-6">
        <Topbar
          headerName="Reset Password"
          goBackToPrevious={() => navigation.goBack()}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
