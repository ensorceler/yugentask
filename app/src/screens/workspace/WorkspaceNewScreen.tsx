import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Topbar } from "../../ui/molecules";
import { Button, Typography } from "../../ui/atoms";
import { Image, View } from "react-native";
import { DEVICE_WIDTH } from "../../constants/theme";
import { WorkspaceNewScreenProps } from "../../@types/navigation";

export default function WorkspaceNewScreen({
  navigation,
}: WorkspaceNewScreenProps) {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-6">
        <Topbar headerName="New Workspace" />
        <View className="mt-4">
          <Typography fw="regular" twClassName="text-greyScale-600">
            You’re able to create a new workspaces, Let’s get started!
          </Typography>
        </View>

        <View className="mt-20 flex">
          <Image
            source={require("../../../assets/images/workspace_user1.png")}
            className="flex-1 "
          />
          <Image
            source={require("../../../assets/images/workspace_user2.png")}
            className="flex-1 mt-16"
          />
          <Image
            source={require("../../../assets/images/workspace_user3.png")}
            className="flex-1 mt-2"
          />
        </View>
        <View
          className="absolute bottom-4 px-8"
          style={{ width: DEVICE_WIDTH }}
        >
          <Button
            onPress={() => navigation.navigate("workspace_create", { step: 1 })}
            twClassName="flex flex-row justify-center items-center rounded-xl"
          >
            <Typography fw="medium" twClassName="text-white">
              Create New
            </Typography>
          </Button>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
