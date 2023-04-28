import { View } from "react-native";
import twFusion from "../../utils/twFusion";
import { Chip, Divider, Progress, Typography } from "../atoms";
import { ProfileFilledIcon } from "../assets/icons";
import { COLORS } from "../../constants/theme";
import AvatarGroup from "../atoms/AvatarGroup";

interface Props {
  projectName?: string;
}

export default function ProjectCard() {
  return (
    <View
      className={twFusion(
        "px-3 pt-1 pb-3 bg-white border border-greyScale-50 rounded-lg gap-y-2 ",
        "-mt-2"
      )}
      style={{
        elevation: 5,
        shadowColor: COLORS.greyScale[500],
      }}
    >
      <View
        aria-label="project_card_header"
        className="flex flex-row items-center justify-between"
      >
        <Typography fw="semiBold" twClassName="text-xl">
          Landing Projects
        </Typography>
        <Chip chipText="10 days left" variant="blue" />
      </View>

      <View>
        <Typography fw="regular" twClassName="text-sm">
          Design travel app UI Kit and make sure create minimalist and clean
          design direction. The design ....
        </Typography>
      </View>

      <View className="flex mb-2">
        <View className="mb-2 flex flex-row items-center justify-between">
          <Typography fw="regular" twClassName="text-sm text-greyScale-600">
            Progress
          </Typography>
          <Typography fw="medium" twClassName="text-sm">
            71%
          </Typography>
        </View>
        <Progress variant="blue" progressValue={71} />
      </View>

      <View>
        <Divider />
      </View>

      <View
        aria-label="project_assign_info"
        className="flex flex-row items-center justify-between"
      >
        <AvatarGroup />
        <View className="flex flex-row items-center gap-2">
          <ProfileFilledIcon fill={COLORS.greyScale[400]} />
          <Typography fw="regular" twClassName="text-xs">
            Assigned by :{" "}
            <Typography fw="medium" twClassName="text-sm">
              Wade Warren
            </Typography>
          </Typography>
        </View>
      </View>
    </View>
  );
}
