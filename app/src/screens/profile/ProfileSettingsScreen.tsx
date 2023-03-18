import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LabelInput, Topbar } from "../../ui/molecules";
import { StatusBar } from "expo-status-bar";
import { ProfileSettingsScreenProps } from "../../@types/navigation";
import { View } from "react-native";
import { Button, Typography } from "../../ui/atoms";
import { useForm } from "react-hook-form";
import { EmailIcon } from "../../ui/assets/icons";
import { COLORS } from "../../constants/theme";

export default function ProfileSettingsScreen({
  navigation,
}: ProfileSettingsScreenProps) {
  const { control } = useForm();
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white">
        <View className="px-6">
          <Topbar
            headerName="Profile Settings"
            goBackToPrevious={() => navigation.goBack()}
          />
          <View className="mt-3 flex flex-row items-center">
            <View className="bg-greyScale-600 h-20 w-20 rounded-full"></View>
            <View className="ml-4 flex ">
              <Typography fw="regular" twClassName="mb-2">
                Upload your best photo here
              </Typography>
              <Button twClassName="px-3 w-max">
                <Typography fw="regular" twClassName="text-white">
                  Upload Photo
                </Typography>
              </Button>
            </View>
          </View>
        </View>

        {/** grey divider, gives a cleaner look*/}
        <View
          aria-label="grey-divider"
          className="w-full h-3 bg-greyScale-100 mt-4"
        />
        <View className="px-6">
          <LabelInput
            name="fullName"
            control={control}
            label="Full name"
            placeholder="Update full name"
          />
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
        <Button twClassName="absolute bottom-2 left-[10%] right-[10%] w-[80%] flex justify-center items-center ">
          <Typography fw="medium" twClassName="text-white">
            Save
          </Typography>
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
