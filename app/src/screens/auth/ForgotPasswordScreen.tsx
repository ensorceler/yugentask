import { Image, View } from "react-native";
import { LabelInput, Topbar } from "../../ui/molecules";
import { Button, Typography } from "../../ui/atoms";
import { COLORS, DEVICE_WIDTH } from "../../constants/theme";
import { useForm } from "react-hook-form";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import twFusion from "../../utils/twFusion";
import { EmailIcon } from "../../ui/assets/icons";

export default function ForgotPasswordScreen({ navigation }) {
  const { control } = useForm();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-6 bg-white">
        <Topbar headerName="Forgot Password?" />
        <View className={twFusion("mt-4 flex items-center gap-y-3", "mt-3")}>
          <View className="mt-3 flex items-center justify-center">
            <Image
              source={require("../../../assets/images/forgot_password_illustration.png")}
              className="h-40 w-40"
            />
          </View>
          <Typography fw="regular" twClassName="text-greyScale-600">
            Enter your email and we will send you a link to reset your password.
          </Typography>
          <LabelInput
            name="email"
            control={control}
            label="Email"
            placeholder="Update email"
            leftIcon={
              <EmailIcon
                className="absolute left-2.5"
                fill={COLORS.primaryBlue[400]}
              />
            }
          />
        </View>
      </SafeAreaView>
      <View style={{ width: DEVICE_WIDTH }} className="px-8 bottom-2">
        <Button
          onPress={() => {
            navigation.navigate("verification");
          }}
          twClassName="flex justify-center items-center"
        >
          <Typography fw="medium" twClassName="text-white">
            Send Email
          </Typography>
        </Button>
      </View>
    </SafeAreaProvider>
  );
}
