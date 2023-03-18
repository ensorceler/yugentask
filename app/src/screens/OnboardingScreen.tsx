import { StatusBar } from "expo-status-bar";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../ui/atoms";
import Typography from "../ui/atoms/Typography";
import { OnboardingScreenProps } from "../@types/navigation";

export default function OnboardingScreen({
  navigation,
}: OnboardingScreenProps) {
  return (
    <SafeAreaView className="relative border bg-primaryBlue-400  flex-1 flex-col justify-center items-center ">
      <View className="flex flex-col items-center ">
        <Text className="font-spaceSemiBold text-3xl text-white">Planwork</Text>
        <Text className="font-spaceRegular text-lg text-white">
          A Project Management App
        </Text>
      </View>
      <View
        className="absolute bottom-4 px-4 py-6 rounded-md bg-white flex flex-col items-center gap-y-5"
        style={{ width: "90%" }}
      >
        <View className="flex flex-col items-center ">
          <Typography fw="semiBold" twClassName="text-2xl text-greyScale-900">
            Easy steps to organize your project
          </Typography>
          <Typography fw="medium" twClassName="text-greyScale-600 text-sm mt-2">
            By using planwork, the project you are working on can be managed
            easily.
          </Typography>
        </View>
        <Button
          onPress={() => {
            navigation.navigate("signup");
          }}
          twClassName="flex justify-center items-center"
        >
          <Typography fw="medium" twClassName="text-white ">
            Sign Up
          </Typography>
        </Button>
        <Button
          onPress={() => {
            navigation.navigate("login");
          }}
          twClassName="bg-primaryBlue-50 flex justify-center items-center "
        >
          <Text className="font-spaceSemiBold text-primaryBlue-400">Login</Text>
        </Button>
      </View>
    </SafeAreaView>
  );
}
