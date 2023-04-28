import { useEffect, useState } from "react";

type DateTimeMode = "date" | "time" | "datetime";

export default function useDateTimePicker() {
  const [date, setDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [mode, setMode] = useState<DateTimeMode>("date");

  const showDatePicker = (mode: DateTimeMode) => {
    setMode(mode);
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date: Date) => {
    setDate(date);
    hideDatePicker();
  };
  return {
    date,
    mode,
    datePickerVisible,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
  };
}
