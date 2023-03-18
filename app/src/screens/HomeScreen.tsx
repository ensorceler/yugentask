import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "../ui/molecules/Searchbar";
import { ProjectCard, Tabs } from "../ui/molecules";
import { View } from "react-native";
import { Button, Typography } from "../ui/atoms";
import { MenuIcon, NotificationIcon } from "../ui/assets/icons";
import { COLORS } from "../constants/theme";
import ProjectCardsList from "../ui/organisms/ProjectCardsList";
import { HomeScreenProps } from "../@types/navigation";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white px-6 pt-4 ">
        <View className="flex flex-row justify-between items-center mb-4">
          <Button twClassName="bg-transparent w-fit ">
            <MenuIcon fill="#121212" />
          </Button>
          <Button
            onPress={() => navigation.navigate("notification")}
            twClassName="w-fit p-2.5 border border-greyScale-200 rounded-md bg-trasnsparent "
          >
            <NotificationIcon fill={COLORS.primaryBlue[900]} />
          </Button>
        </View>

        <View className="flex items-start mb-4">
          <Typography fw="semiBold" twClassName="text-xl">
            Hi, Shakil Ahmed
          </Typography>
          <Typography fw="regular" twClassName="text-sm">
            Let's finish your work today
          </Typography>
        </View>
        <Searchbar />

        <View className="mt-4 mb-4">
          <Tabs />
        </View>

        <View className="flex-1">
          <ProjectCardsList />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
