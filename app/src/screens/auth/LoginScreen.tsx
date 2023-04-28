import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { FormLabelInput, LabelInput, Topbar } from "../../ui/molecules";
import { LoginScreenProps } from "../../@types/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Divider, Typography } from "../../ui/atoms";
import twFusion from "../../utils/twFusion";
import {
  AppleIcon,
  EmailIcon,
  GoogleColorIcon,
  LoaderIcon,
  LockIcon,
} from "../../ui/assets/icons";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { COLORS, DEVICE_WIDTH } from "../../constants/theme";
import usePostLoginUser from "../../hooks/apis/user/usePostLoginUser";
import Toast from "react-native-toast-message";
import useAuthStore from "../../store/useAuthStore";

const LoginSchema = z.object({
  email: z.string().min(6, { message: "Email is Required" }),
  password: z.string().min(6, { message: "Password is Required" }),
});

type LoginSchemaType = z.infer<typeof LoginSchema>;

export default function LoginScreen({ navigation }: LoginScreenProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const { mutateAsync, isLoading } = usePostLoginUser();
  const { setAuthToken } = useAuthStore();

  const loginUser = async (data: LoginSchemaType) => {
    const response = await mutateAsync(data);
    if (response.status === 200) {
      Toast.show({
        type: "success",
        text1: response.data.message,
        text2: "wait for a few seconds",
      });
      setAuthToken(response.data.token);
    } else {
      Toast.show({
        type: "error",
        text1: response.data.message,
      });
    }
  };

  const onSubmit: SubmitHandler<LoginSchemaType> = (data: LoginSchemaType) => {
    loginUser(data);
  };

  const goToSignupPage = () => {
    navigation.navigate("signup");
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="bg-white flex-1 px-6">
        <Topbar
          headerName="Login"
          goBackToPrevious={() => navigation.goBack()}
        />
        <View className={twFusion("flex gap-y-4", "mt-4")}>
          <FormLabelInput
            control={control}
            label="Email"
            name="email"
            placeholder="Enter your email"
            errors={errors}
            icon={
              <EmailIcon
                fill={COLORS.primaryBlue[400]}
                className="absolute left-3"
              />
            }
          />
          <FormLabelInput
            control={control}
            label="Password"
            name="password"
            placeholder="Enter your password"
            errors={errors}
            icon={
              <LockIcon
                fill={COLORS.primaryBlue[400]}
                className="absolute left-3"
              />
            }
          />

          <View className="w-full flex items-end">
            <Pressable onPress={() => navigation.navigate("forgot_password")}>
              <Typography fw="medium" twClassName="text-primaryBlue-400">
                Forgot Password?
              </Typography>
            </Pressable>
          </View>

          {/** Login Button */}
          <Button
            onPress={handleSubmit(onSubmit)}
            twClassName="flex items-center justify-center"
          >
            {isLoading ? (
              <LoaderIcon className="text-white rotate-45 " />
            ) : (
              <Typography fw="medium" twClassName="text-white ">
                Login
              </Typography>
            )}
          </Button>
        </View>
        {/** Login Button */}

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

        <View
          className="absolute bottom-4 flex items-center justify-center "
          style={{ width: DEVICE_WIDTH }}
        >
          <View className="flex flex-row items-center">
            <Typography fw="regular" twClassName="text-sm">
              Don't have an account ?{" "}
            </Typography>
            <Pressable onPress={goToSignupPage}>
              <Typography fw="medium" twClassName="text-primaryBlue-400">
                Signup
              </Typography>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
