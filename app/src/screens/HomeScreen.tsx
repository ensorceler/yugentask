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
import WorkspaceDrawer from "../components/WorkspaceDrawer/WorkspaceDrawer";
import * as React from "react";
import { useForm } from "react-hook-form";

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const [workspaceVisible, setWorkspaceVisible] = React.useState(false);
  const { control } = useForm();
  const closeWorkspaceDrawer = () => {
    setWorkspaceVisible(false);
  };

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <WorkspaceDrawer
        setDrawerClose={closeWorkspaceDrawer}
        drawerOpen={workspaceVisible}
      >
        <SafeAreaView className="flex-1 bg-white px-6 pt-4 ">
          <View className="flex flex-row justify-between items-center mb-4">
            <Button
              onPress={() => {
                setWorkspaceVisible(true);
              }}
              twClassName="bg-transparent w-fit p-3 "
            >
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
          <Searchbar
            control={control}
            name="searchProject"
            placeholder="Search your tasks"
          />

          <View className="mt-4 mb-4">
            <Tabs />
          </View>

          <View className="flex-1">
            <ProjectCardsList />
          </View>
        </SafeAreaView>
      </WorkspaceDrawer>
    </SafeAreaProvider>
  );
}
