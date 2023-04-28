import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Button, Typography } from "../ui/atoms";
import React from "react";
import { AlertTriangleIcon } from "../ui/assets/icons";

export default function FolderScreen() {
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 flex justify-center items-center bg-white px-6">
        <Button twClassName="justify-center items-center bg-yellow-400">
          <AlertTriangleIcon className="text-black" />
          <Typography fw="semiBold" twClassName="text-black">
            Experimental
          </Typography>
        </Button>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
