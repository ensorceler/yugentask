import { useState } from "react";
import { View, Text, DrawerLayoutAndroid, Pressable } from "react-native";
import { Drawer } from "react-native-drawer-layout";
import { Button, Divider, Typography } from "../../ui/atoms";
import * as React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {
  CloseIcon,
  GraphicDesignIcon,
  HelpIcon,
  LogoutIcon,
  MoreIcon,
  PlusIcon,
} from "../../ui/assets/icons";
import twFusion from "../../utils/twFusion";
import { COLORS } from "../../constants/theme";
import WorkspaceFrame from "../../ui/organisms/WorkspaceFrame";
import { useNavigation } from "@react-navigation/native";

interface WorkspaceDrawerProps {
  children: React.ReactElement;
  drawerOpen: boolean;
  setDrawerClose: () => void;
}

export default function WorkspaceDrawer({
  drawerOpen,
  setDrawerClose,
  children,
}: WorkspaceDrawerProps) {
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<any>();
  return (
    <Drawer
      drawerType="front"
      open={drawerOpen}
      onOpen={() => {}}
      onClose={setDrawerClose}
      drawerPosition="left"
      renderDrawerContent={() => {
        return (
          <SafeAreaProvider>
            <SafeAreaView className="flex-1">
              <View className="flex items-start p-4">
                {/**
                 * 
                <Button
                  onPress={setDrawerClose}
                  twClassName="w-fit bg-transparent p-2 rounded-lg"
                >
                  <CloseIcon className="text-greyScale-900" />
                </Button>
                 * 
                 */}
                <View className="">
                  <Typography fw="medium" twClassName="text-2xl">
                    Workspace
                  </Typography>
                </View>
              </View>

              <View className="mt-4  flex ">
                <WorkspaceFrame currentWorkspace={true} />
                <WorkspaceFrame />
              </View>

              <View className="absolute bottom-0">
                <Pressable
                  onPress={() => {
                    navigation.navigate("workspace");
                  }}
                  className={twFusion(
                    "p-3 flex flex-row items-center gap-x-2",
                    "-ml-2"
                  )}
                >
                  <View className="bg-greyScale-100 rounded-lg w-10 h-10 flex justify-center items-center">
                    <PlusIcon className="text-greyScale-600" />
                  </View>
                  <Typography fw="regular" twClassName="text-lg">
                    Add a workspace
                  </Typography>
                </Pressable>

                <View
                  className={twFusion(
                    "p-3 flex flex-row items-center gap-x-2",
                    "-ml-2"
                  )}
                >
                  <View className="bg-greyScale-100 rounded-lg w-10 h-10 flex justify-center items-center">
                    <HelpIcon fill={COLORS.greyScale[600]} />
                  </View>
                  <Typography fw="regular" twClassName="text-lg">
                    Help
                  </Typography>
                </View>

                <View
                  className={twFusion(
                    "p-3 flex flex-row items-center gap-x-2",
                    "-ml-2"
                  )}
                >
                  <View className="bg-greyScale-100 rounded-lg w-10 h-10 flex justify-center items-center">
                    <LogoutIcon fill={COLORS.greyScale[600]} />
                  </View>
                  <Typography fw="regular" twClassName="text-lg">
                    Logout
                  </Typography>
                </View>
              </View>
            </SafeAreaView>
          </SafeAreaProvider>
        );
      }}
    >
      {children}
    </Drawer>
  );
}
