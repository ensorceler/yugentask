import { View } from "react-native";
import { DualUsersIcon } from "../assets/icons";
import { Button, Typography } from "../atoms";
import { COLORS } from "../../constants/theme";
import { ReactElement, useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import dayjs from "dayjs";

interface Props {
  fieldName: string;
  fieldType?: string;
  fieldIcon?: ReactElement;
}

export default function ProjectFormField({
  fieldName,
  fieldIcon,
  fieldType,
}: Props) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [mode, setMode] = useState<"date" | "time">("date");

  const showDateTimePicker = (currentMode: "date" | "time") => () => {
    setMode(currentMode);
    setShowPicker(true);
  };

  const handlePickerChange = (event: any, selectedDate?: Date) => {
    setShowPicker(false);
    if (selectedDate) {
      setDate(selectedDate);
    }
  };
  return (
    <View className="flex flex-row items-center mb-3">
      <View className="w-36 mr-4 flex flex-row items-center">
        {fieldIcon && fieldIcon}
        <Typography fw="regular" twClassName="text-greyScale-600 ml-2">
          {fieldName}
        </Typography>
      </View>
      {fieldType === "date" && (
        <View className="flex flex-row items-center ">
          <Button
            twClassName="w-fit p-0 bg-transparent mr-2"
            onPress={showDateTimePicker("date")}
          >
            <Typography fw="regular">
              {dayjs(date).format("MMM D YYYY")}
            </Typography>
          </Button>
          <Button
            twClassName="w-fit p-0 bg-transparent "
            onPress={showDateTimePicker("time")}
          >
            <Typography fw="regular">
              {dayjs(date).format("hh:mm A")}
            </Typography>
          </Button>
        </View>
      )}
      {showPicker && (
        <DateTimePicker
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={handlePickerChange}
        />
      )}
    </View>
  );
}
