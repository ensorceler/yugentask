import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { MainTabParamList } from "../@types/navigation";
import NewProjectScreen from "../screens/NewProjectScreen";
import CalendarScreen from "../screens/CalendarScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import {
  CalendarFilledIcon,
  CalendarOutlinedIcon,
  FolderFilledIcon,
  FolderOutlinedIcon,
  HomeFilledIcon,
  HomeOutlinedIcon,
  PlusIcon,
  ProfileFilledIcon,
  ProfileOutlinedIcon,
} from "../ui/assets/icons";
import FolderScreen from "../screens/FolderScreen";
import { View } from "react-native";
import { Button } from "../ui/atoms";
import { useNavigation } from "@react-navigation/native";
import ProfileNavigation from "./ProfileNavigation";
import NotificationScreen from "../screens/NotificationScreen";
import { COLORS } from "../constants/theme";

const MainTab = createBottomTabNavigator<MainTabParamList>();

const tabScreenOptions = {
  headerShown: false,
  tabBarActiveTintColor: "#5C68FF",
  tabBarInactiveTintColor: "#A6A6A6",
  tabBarHideOnKeyboard: true,
};

export default function MainNavigation() {
  const navigation = useNavigation<any>();
  return (
    <MainTab.Navigator
      screenOptions={{
        ...tabScreenOptions,
        tabBarLabelStyle: {
          fontFamily: "SpaceGrotesk_500Medium",
          fontSize: 12,
        },
        tabBarStyle: {
          height: 60,
          borderTopColor: "#fff",
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: "#fff",
          elevation: 20,
          shadowColor: COLORS.greyScale[900],
        },
      }}
    >
      <MainTab.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: "Home",
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <HomeFilledIcon fill={color} />
            ) : (
              <HomeOutlinedIcon fill={color} />
            );
          },
        }}
      />
      <MainTab.Screen
        name="folder"
        component={FolderScreen}
        options={{
          title: "Folder",
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <FolderFilledIcon fill={color} />
            ) : (
              <FolderOutlinedIcon fill={color} />
            );
          },
        }}
      />

      <MainTab.Screen
        name="new_project"
        component={NewProjectScreen}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarLabelStyle: {
            display: "none",
          },
          tabBarButton: () => {
            return (
              <Button
                onPress={() => navigation.navigate("new_project")}
                twClassName="w-12 h-12 mt-2 bg-primaryBlue-400 rounded-full flex justify-center items-center"
              >
                <PlusIcon className="text-white" />
              </Button>
            );
          },
        }}
      />
      <MainTab.Screen
        name="calendar"
        component={CalendarScreen}
        options={{
          title: "Calendar",
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <CalendarFilledIcon fill={color} />
            ) : (
              <CalendarOutlinedIcon fill={color} />
            );
          },
        }}
      />
      <MainTab.Screen
        name="profile"
        component={ProfileNavigation}
        options={{
          title: "Profile",
          tabBarHideOnKeyboard: true,
          tabBarIcon: ({ focused, size, color }) => {
            return focused ? (
              <ProfileFilledIcon fill={color} />
            ) : (
              <ProfileOutlinedIcon fill={color} />
            );
          },
        }}
      />
      <MainTab.Screen
        name="notification"
        component={NotificationScreen}
        options={{
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        }}
      />
    </MainTab.Navigator>
  );
}
