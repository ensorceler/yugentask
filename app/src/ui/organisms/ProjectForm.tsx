import { View } from "react-native";
import { Typography } from "../atoms";
import {
  CalendarFilledIcon,
  ClockIcon,
  DualUsersIcon,
  StatsIcon,
  TeamsIcon,
  ThemeIcon,
} from "../assets/icons";
import { COLORS } from "../../constants/theme";
import { ProjectFormField } from "../molecules";

export default function ProjectForm() {
  return (
    <View className="mt-2 ">
      <ProjectFormField
        fieldName="Assigned To"
        fieldIcon={<DualUsersIcon fill={COLORS.greyScale[500]} />}
      />
      <ProjectFormField
        fieldName="Created time"
        fieldType="date"
        fieldIcon={<ClockIcon fill={COLORS.greyScale[500]} />}
      />
      <ProjectFormField
        fieldName="Due Date"
        fieldType="date"
        fieldIcon={<CalendarFilledIcon fill={COLORS.greyScale[500]} />}
      />
      <ProjectFormField
        fieldName="Progress"
        fieldIcon={<StatsIcon fill={COLORS.greyScale[500]} />}
      />
      <ProjectFormField
        fieldName="Teams"
        fieldIcon={<TeamsIcon fill={COLORS.greyScale[500]} />}
      />
      <ProjectFormField
        fieldName="Theme"
        fieldIcon={<ThemeIcon fill={COLORS.greyScale[500]} />}
      />
    </View>
  );
}
