import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../../ui/molecules";
import { View } from "react-native";
import { Typography } from "../../ui/atoms";
import twFusion from "../../utils/twFusion";

export default function ChangePasswordScreen({ navigation }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="px-6 bg-white flex-1">
        <Topbar
          headerName="Enter Code"
          goBackToPrevious={() => {
            navigation.goBack();
          }}
        />
        <View className={twFusion("mt-3 flex items-center")}>
          <Typography fw="regular" twClassName="text-greyScale-600">
            Enter code sent to timowerxxx@gmail.com This code will expired in
            00:35
          </Typography>
        </View>
        <View>
          <Typography fw="bold" twClassName="text-2xl">
            OTP Input
          </Typography>
        </View>
        <View>
          <Typography fw="regular" twClassName="text-sm text-greyScale-600">
            Didn’t receive the code?
            <Typography fw="regular" twClassName="text-primaryBlue-400">
              Resend Code
            </Typography>
          </Typography>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
