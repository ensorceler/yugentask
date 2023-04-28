import { View } from "react-native";
import { Typography } from "../atoms";
import { TextInput } from "react-native";

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
    <View className="mt-2">
      <View className="mb-3">
        <TextInput
          className="text-lg font-spaceMedium placeholder:font-spaceRegular"
          placeholder="Task name..."
          cursorColor={COLORS.greyScale[900]}
          placeholderTextColor={COLORS.greyScale[600]}
        />
      </View>
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
