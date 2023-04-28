import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Divider, Typography } from "../ui/atoms";
import { Topbar } from "../ui/molecules";
import { ProjectForm } from "../ui/organisms";
import { NewProjectScreenProps } from "../@types/navigation";
import { View } from "react-native";
import ProjectTodoList from "../ui/organisms/ProjectTodoList";
import { useForm } from "react-hook-form";

export default function NewProjectScreen({
navigation,
}: NewProjectScreenProps) {
  const { control } = useForm();
  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 flex bg-white px-6 py-2">
        <Topbar
          headerName="New Project"
          goBackToPrevious={() => navigation.goBack()}
        />
        <View className="mt-2 mb-2">
          <ProjectForm />
        </View>
        <Divider />
        <ProjectTodoList />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
