import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { SignupScreenProps } from "../@types/navigation";
import { Button, Divider, Input, Typography } from "../ui/atoms";
import { AppleIcon, GoogleColorIcon, UserIcon } from "../ui/assets/icons";
import { View } from "react-native";
import { LabelInput, Topbar } from "../ui/molecules";
import { useForm } from "react-hook-form";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import * as Linking from "expo-linking";
import twFusion from "../utils/twFusion";

export default function SignupScreen({ navigation }: SignupScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data: any) => console.log(data);
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="bg-white flex-1 px-6">
        <Topbar
          headerName="Sign Up"
          goBackToPrevious={() => navigation.goBack()}
        />

        <View className="flex gap-y-4 mt-4">
          <LabelInput
            control={control}
            name="fullName"
            label="Full Name"
            placeholder="Enter your full name"
          />
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

          <View className="flex flex-row items-center ">
            <BouncyCheckbox onPress={async (isChecked: boolean) => {}} />
            <Typography fw="regular" twClassName="whitespace-normal flex-1">
              I agree to the{" "}
              <Typography fw="regular" twClassName="text-primaryBlue-400">
                Terms of Conditions{" "}
              </Typography>
              and
              <Typography fw="regular" twClassName="text-primaryBlue-400 ">
                {" "}
                Privacy Policy
              </Typography>
            </Typography>
          </View>
          <Button
            onPress={handleSubmit(onSubmit)}
            twClassName="flex justify-center items-center rounded-2xl"
          >
            <Typography fw="medium" twClassName="text-white text-lg">
              Sign Up
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
              Sign up with Google
            </Typography>
          </Button>
          <Button
            variant="social"
            twClassName="flex justify-center items-center"
          >
            <AppleIcon className="absolute left-5 text-greyScale-900" />
            <Typography fw="medium" twClassName="text-lg">
              Sign up with Apple
            </Typography>
          </Button>
        </View>

        <View className="mt-4 flex items-center">
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
