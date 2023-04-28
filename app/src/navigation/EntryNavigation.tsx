import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { EntryStackParamList } from "../@types/navigation";
import OnboardingScreen from "../screens/auth/OnboardingScreen";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";
import ForgotPasswordScreen from "../screens/auth/ForgotPasswordScreen";
import VerificationScreen from "../screens/auth/VerificationScreen";

const EntryStack = createNativeStackNavigator<EntryStackParamList>();

export default function EntryNavigation() {
  return (
    <EntryStack.Navigator screenOptions={{ headerShown: false }}>
      <EntryStack.Screen name="onboarding" component={OnboardingScreen} />
      <EntryStack.Screen name="login" component={LoginScreen} />
      <EntryStack.Screen name="signup" component={SignupScreen} />
      <EntryStack.Screen
        name="forgot_password"
        component={ForgotPasswordScreen}
      />
      <EntryStack.Screen name="verification" component={VerificationScreen} />
    </EntryStack.Navigator>
  );
}
