import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { NativeSafeAreaProviderProps } from "react-native-safe-area-context";

export type EntryStackParamList = {
  onboarding: undefined;
  signup: undefined;
  login: undefined;
};

export type MainTabParamList = {
  home: undefined;
  folder: undefined;
  new_project: undefined;
  calendar: undefined;
  profile: undefined;
  notification: undefined;
};

export type ProfileStackParamList = {
  profile_main: undefined;
  profile_settings: undefined;
  profile_reset_password: undefined;
  profile_advanced: undefined;
};

export type OnboardingScreenProps = NativeStackScreenProps<
  EntryStackParamList,
  "onboarding"
>;

export type LoginScreenProps = NativeStackScreenProps<
  EntryStackParamList,
  "login"
>;

export type SignupScreenProps = NativeStackScreenProps<
  EntryStackParamList,
  "signup"
>;

export type HomeScreenProps = NativeStackScreenProps<MainTabParamList, "home">;

export type NotificationScreenProps = NativeStackScreenProps<
  MainTabParamList,
  "notification"
>;

export type NewProjectScreenProps = NativeStackScreenProps<
  MainTabParamList,
  "new_project"
>;

export type ProfileMainScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  "profile_main"
>;

export type ProfileSettingsScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  "profile_settings"
>;

export type ProfileAdvancedScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  "profile_advanced"
>;

export type ResetPasswordScreenProps = NativeStackScreenProps<
  ProfileStackParamList,
  "profile_reset_password"
>;
