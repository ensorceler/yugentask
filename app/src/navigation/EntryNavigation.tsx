import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { EntryStackParamList } from "../@types/navigation";
import OnboardingScreen from "../screens/OnboardingScreen";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";

const EntryStack = createNativeStackNavigator<EntryStackParamList>();

export default function EntryNavigation() {
  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false }}>
      <EntryStack.Screen name="onboarding" component={OnboardingScreen} />
      <EntryStack.Screen name="login" component={LoginScreen} />
      <EntryStack.Screen name="signup" component={SignupScreen} />
    </EntryStack.Navigator>
  );
}
