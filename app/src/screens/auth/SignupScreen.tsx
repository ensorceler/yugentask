import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { SignupScreenProps } from "../../@types/navigation";
import { Button, Divider, Input, Typography } from "../../ui/atoms";
import {
  AppleIcon,
  EmailIcon,
  GoogleColorIcon,
  LockIcon,
  UserIcon,
} from "../../ui/assets/icons";
import { Pressable, View } from "react-native";
import { FormLabelInput, Topbar } from "../../ui/molecules";
import { useForm } from "react-hook-form";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import twFusion from "../../utils/twFusion";
import { COLORS, DEVICE_WIDTH } from "../../constants/theme";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import usePostSignupUser from "../../hooks/apis/user/usePostSignupUser";
import Toast from "react-native-toast-message";

export default function SignupScreen({ navigation }: SignupScreenProps) {
  const schema = z.object({
    fullName: z.string().min(6, { message: "Full Name is required" }),
    email: z.string().min(6, { message: "Email is Required" }),
    password: z
      .string()
      .min(8, { message: "Password is Required, Min 8 characters" }),
  });
  const { mutateAsync, isLoading } = usePostSignupUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log("submit data=>", data);
    const response: any = await mutateAsync({
      fullName: data.fullName,
      email: data.email,
      password: data.password,
    });

    // status 201 means User has been created and signup has been successful
    if (response.status === 201) {
      Toast.show({
        type: "success",
        text1: response.data.message,
        text2: "Redirecting to Login page",
      });
      setTimeout(goToLoginPage, 3500);
    } else {
      // Signup unsucessful
      Toast.show({
        type: "error",
        text1: response.data.message,
      });
    }
  };

  const onGoogleSignup = () => {
    Toast.show({
      type: "error",
      text1: "Feature is not live yet",
      text2: "will be added soon",
    });
  };

  const onAppleSignup = () => {};

  const goToLoginPage = () => {
    navigation.navigate("login");
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="bg-white flex-1 px-6">
        <Topbar
          headerName="Sign Up"
          goBackToPrevious={() => navigation.goBack()}
        />
        <View className="flex gap-y-4 mt-4">
          <FormLabelInput
            control={control}
            label="Full Name"
            name="fullName"
            icon={
              <UserIcon
                fill={COLORS.primaryBlue[400]}
                className="absolute left-3"
              />
            }
            placeholder="Enter your Full Name"
            errors={errors}
          />
          <FormLabelInput
            control={control}
            label="Email"
            name="email"
            icon={
              <EmailIcon
                fill={COLORS.primaryBlue[400]}
                className="absolute left-3"
              />
            }
            placeholder="Enter your email"
            errors={errors}
          />
          <FormLabelInput
            control={control}
            label="Password"
            name="password"
            icon={
              <LockIcon
                fill={COLORS.primaryBlue[400]}
                className="absolute left-3"
              />
            }
            placeholder="Enter your password"
            register={register}
            errors={errors}
          />

          <View className="flex flex-row items-center ">
            <BouncyCheckbox
              fillColor={COLORS.primaryBlue[300]}
              onPress={async (isChecked: boolean) => {}}
            />
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
            onPress={onGoogleSignup}
          >
            <GoogleColorIcon className="absolute left-5" />
            <Typography fw="medium" twClassName="text-lg">
              Sign up with Google
            </Typography>
          </Button>
          <Button
            variant="social"
            twClassName="flex justify-center items-center"
            onPress={onAppleSignup}
          >
            <AppleIcon className="absolute left-5 text-greyScale-900" />
            <Typography fw="medium" twClassName="text-lg">
              Sign up with Apple
            </Typography>
          </Button>
        </View>

        <View
          className="absolute bottom-2 mt-4 flex items-center"
          style={{ width: DEVICE_WIDTH }}
        >
          <View className="flex flex-row items-center">
            <Typography fw="regular" twClassName="text-sm">
              Already have an account?{" "}
            </Typography>
            <Pressable onPress={goToLoginPage}>
              <Typography fw="medium" twClassName="text-primaryBlue-400">
                Login
              </Typography>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
