import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LabelInput, Topbar } from "../../ui/molecules";
import { View } from "react-native";
import { Button, Step, Typography } from "../../ui/atoms";
import { useForm } from "react-hook-form";
import twFusion from "../../utils/twFusion";
import { WorkspaceCreateScreenProps } from "../../@types/navigation";

interface WorkspaceCreateStepProps {
  navigation: any;
}

const WorkspaceCreateStep1 = ({ navigation }: WorkspaceCreateStepProps) => {
  const { control } = useForm();
  return (
    <View>
      <Topbar headerName="Create Workspace" />
      <View className="mt-2">
        <Step currentStep={1} />
      </View>
      <View className={twFusion("flex gap-y-3", "mt-4")}>
        <Typography fw="semiBold" twClassName="text-xl">
          What’s the name of your new workspace?
        </Typography>

        <LabelInput
          name="workspaceName"
          control={control}
          placeholder="ex. Timo's Project"
          twClassName=""
        />

        <Button
          onPress={() => navigation.setParams({ step: 2 })}
          twClassName="mt-3 rounded-xl flex justify-center items-center"
        >
          <Typography fw="medium" twClassName="text-white">
            Next
          </Typography>
        </Button>
        <Typography fw="regular" twClassName="text-greyScale-900">
          By continuing, you’re agreeing to our Terms of Service and Privacy
          Policy.
        </Typography>
      </View>
    </View>
  );
};

const WorkspaceCreateStep2 = ({ navigation }: WorkspaceCreateStepProps) => {
  const { control } = useForm();
  return (
    <View>
      <Topbar headerName="Create Workspace" />
      <View className="mt-2">
        <Step currentStep={2} />
      </View>
      <View className={twFusion("flex gap-y-3", "mt-4")}>
        <Typography fw="semiBold" twClassName="text-xl">
          What’s the type of project your create?
        </Typography>

        <LabelInput
          name="workspaceType"
          control={control}
          placeholder="ex. Mobile Apps"
          twClassName=""
        />

        <Button
          onPress={() => navigation.setParams({ step: 3 })}
          twClassName="mt-3 rounded-xl flex justify-center items-center"
        >
          <Typography fw="medium" twClassName="text-white">
            Next
          </Typography>
        </Button>
      </View>
    </View>
  );
};

const WorkspaceCreateStep3 = ({ navigation }: WorkspaceCreateStepProps) => {
  const { control } = useForm();
  return (
    <View>
      <Topbar headerName="Create Workspace" />
      <View className="mt-2">
        <Step currentStep={3} />
      </View>
      <View className={twFusion("flex gap-y-3", "mt-4")}>
        <Typography fw="semiBold" twClassName="text-xl">
          Great! Who joined your workspace?
          <Typography fw="regular" twClassName="text-sm text-greyScale-600">
            Add your teammate and let’s rock! ✌️
          </Typography>
        </Typography>

        <Button
          onPress={() =>
            navigation.navigate("workspace_share_invite", { type: "invite" })
          }
          twClassName="mt-3 rounded-xl flex justify-center items-center"
        >
          <Typography fw="medium" twClassName="text-white">
            Invite by Email
          </Typography>
        </Button>
      </View>
    </View>
  );
};

export default function WorkspaceCreateScreen({
  navigation,
  route,
}: WorkspaceCreateScreenProps) {
  const { step } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 px-6">
        {step === 1 && <WorkspaceCreateStep1 navigation={navigation} />}
        {step === 2 && <WorkspaceCreateStep2 navigation={navigation} />}
        {step === 3 && <WorkspaceCreateStep3 navigation={navigation} />}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
