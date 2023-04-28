import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WorkspaceStackParamList } from "../@types/navigation";
import WorkspaceNewScreen from "../screens/workspace/WorkspaceNewScreen";
import WorkspaceCreateScreen from "../screens/workspace/WorkspaceCreateScreen";
import WorkspaceShareInviteScreen from "../screens/workspace/WorkspaceShareInviteScreen";

const WorkspaceStack = createNativeStackNavigator<WorkspaceStackParamList>();

export default function WorkspaceNavigation() {
  return (
    <WorkspaceStack.Navigator
      initialRouteName="workspace_new"
      screenOptions={{
        headerShown: false,
      }}
    >
      <WorkspaceStack.Screen
        component={WorkspaceNewScreen}
        name="workspace_new"
      />
      <WorkspaceStack.Screen
        name="workspace_create"
        component={WorkspaceCreateScreen}
      />
      <WorkspaceStack.Screen
        name="workspace_share_invite"
        component={WorkspaceShareInviteScreen}
      />
    </WorkspaceStack.Navigator>
  );
}
