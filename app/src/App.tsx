import Navigation from "./navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";

import * as Font from "expo-font";
import useOnlineManager from "./hooks/utils/useOnlineManager";
import { AppState, AppStateStatus, Platform } from "react-native";
import Toast from "react-native-toast-message";
import { toastConfig } from "./utils/toastConfig";

const onAppStateChange = (status: AppStateStatus) => {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
};

const useFonts = async () => {
  await Font.loadAsync({
    SpaceGrotesk_Light: require("../assets/fonts/static/SpaceGrotesk-Light.ttf"),
    SpaceGrotesk_Regular: require("../assets/fonts/static/SpaceGrotesk-Regular.ttf"),
    SpaceGrotesk_Medium: require("../assets/fonts/static/SpaceGrotesk-Medium.ttf"),
    SpaceGrotesk_SemiBold: require("../assets/fonts/static/SpaceGrotesk-SemiBold.ttf"),
    SpaceGrotesk_Bold: require("../assets/fonts/static/SpaceGrotesk-Bold.ttf"),
  });
};

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

if (__DEV__) {
  import("./config/Reactotron.config").then(() =>
    console.log("reactotron is configured!!!")
  );
}

export default function App() {
  const [isReady, setIsReady] = useState(false);

  // auto refetch on reconnect
  useOnlineManager();

  // load the fonts
  useEffect(() => {
    useFonts().then(() => setIsReady(true));
  }, []);

  // Refetch on App Focus
  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);
    return () => subscription.remove();
  }, []);

  if (!isReady) {
    return null;
  }
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar style="light" />
          <Navigation />
          <Toast config={toastConfig} />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}
