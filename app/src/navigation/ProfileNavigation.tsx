import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProfileStackParamList } from "../@types/navigation";
import ProfileScreen from "../screens/profile/ProfileScreen";
import AdvancedSettingsScreen from "../screens/profile/AdvancedSettingsScreen";
import ResetPasswordScreen from "../screens/profile/ResetPasswordScreen";
import ProfileSettingsScreen from "../screens/profile/ProfileSettingsScreen";

const ProfileStack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileNavigation() {
  return (
    <ProfileStack.Navigator
      initialRouteName="profile_main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <ProfileStack.Screen name="profile_main" component={ProfileScreen} />
      <ProfileStack.Screen
        name="profile_settings"
        component={ProfileSettingsScreen}
      />
      <ProfileStack.Screen
        name="profile_advanced"
        component={AdvancedSettingsScreen}
      />
      <ProfileStack.Screen
        name="profile_reset_password"
        component={ResetPasswordScreen}
      />
    </ProfileStack.Navigator>
  );
}
