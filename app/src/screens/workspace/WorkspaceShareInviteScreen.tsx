import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { LabelInput, Topbar } from "../../ui/molecules";
import { WorkspaceShareInviteScreenProps } from "../../@types/navigation";
import { Button, Typography } from "../../ui/atoms";
import { View } from "react-native";
import { useForm } from "react-hook-form";
import twFusion from "../../utils/twFusion";
import { EmailIcon } from "../../ui/assets/icons";
import { COLORS } from "../../constants/theme";

export default function WorkspaceShareInviteScreen({
  navigation,
  route,
}: WorkspaceShareInviteScreenProps) {
  const { type } = route.params;
  const { control } = useForm();

  return (
    <SafeAreaProvider>
      <SafeAreaView className="px-6 flex-1">
        <Topbar
          headerName={type === "share" ? "Share Link" : "Invite Member"}
        />
        <View className="mt-3">
          {type === "share" && (
            <Typography fw="regular" twClassName="text-greyScale-600">
              Share the link below, and you can also easily copy the link👌
            </Typography>
          )}
          {<View></View>}
          {type === "invite" && (
            <View className={twFusion("flex gap-y-3", "mt-2")}>
              <LabelInput
                control={control}
                name="inviteEmail"
                label="Email"
                placeholder="Invite Email"
                leftIcon={
                  <EmailIcon
                    fill={COLORS.primaryBlue[500]}
                    className="absolute left-2.5"
                  />
                }
              />
              <Button
                twClassName="
              rounded-xl
              flex justify-center items-center
              "
              >
                <Typography fw="medium" twClassName="text-white">
                  Send Invitation
                </Typography>
              </Button>
            </View>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
