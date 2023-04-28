import { Pressable, View } from "react-native";
import twFusion from "../../utils/twFusion";
import { DualUsersIcon, GraphicDesignIcon, MoreIcon } from "../assets/icons";
import { Button, Typography } from "../atoms";
import { COLORS } from "../../constants/theme";
import { Popover } from "../molecules";

interface WorkspaceFrameProps {
  currentWorkspace?: boolean;
}

export default function WorkspaceFrame({
  currentWorkspace,
}: WorkspaceFrameProps) {
  return (
    <View
      className={twFusion(
        "w-full flex flex-row items-center pl-4 pr-2 py-3",
        currentWorkspace && "bg-primaryBlue-50"
      )}
    >
      <Button twClassName="w-fit p-2 mr-3 flex justify-center items-center">
        <GraphicDesignIcon fill="#fff" />
      </Button>
      <View className="flex-1 flex flex-row items-center justify-between ">
        <View className="flex items-start ">
          <Typography fw="medium" twClassName="text-base">
            Startup Project
          </Typography>
          <Typography fw="regular" twClassName="text-sm text-greyScale-500">
            2 members
          </Typography>
        </View>
        <Popover from={<MoreIcon fill={COLORS.greyScale[900]} />} />
      </View>
    </View>
  );
}
