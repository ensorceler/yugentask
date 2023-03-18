import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LabelInput, Topbar } from "../ui/molecules";
import { LoginScreenProps } from "../@types/navigation";
import { useForm } from "react-hook-form";
import { Button, Divider, Typography } from "../ui/atoms";
import twFusion from "../utils/twFusion";
import { AppleIcon, GoogleColorIcon } from "../ui/assets/icons";

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="bg-white flex-1 px-6">
        <Topbar
          headerName="Login"
          goBackToPrevious={() => navigation.goBack()}
        />
        <View className={twFusion("flex gap-y-4", "mt-4")}>
          <LabelInput
            control={control}
            name="email"
            label="Email"
            placeholder="Enter your email"
          />
          <LabelInput
            control={control}
            name="password"
            label="Password"
            placeholder="Enter your password"
          />
          <View className="w-full flex items-end">
            <Typography fw="medium" twClassName="text-primaryBlue-400">
              Forgot Password?
            </Typography>
          </View>
          <Button twClassName="flex items-center justify-center">
            <Typography fw="medium" twClassName="text-white ">
              Login
            </Typography>
          </Button>
        </View>

        <View
          className={twFusion("flex flex-col items-center gap-y-4", "mt-8")}
        >
          <Divider />
          <Button
            variant="social"
            twClassName="relative flex justify-center items-center"
          >
            <GoogleColorIcon className="absolute left-5" />
            <Typography fw="medium" twClassName="text-lg">
              Login with Google
            </Typography>
          </Button>
          <Button
            variant="social"
            twClassName="flex justify-center items-center"
          >
            <AppleIcon className="absolute left-5 text-greyScale-900" />
            <Typography fw="medium" twClassName="text-lg">
              Login with Apple
            </Typography>
          </Button>
        </View>

        <View className="absolute w-full bottom-4 flex items-center justify-center ">
          <Typography fw="regular" twClassName="text-sm">
            Already have an account?{" "}
            <Typography fw="medium" twClassName="text-primaryBlue-400">
              Login
            </Typography>
          </Typography>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
