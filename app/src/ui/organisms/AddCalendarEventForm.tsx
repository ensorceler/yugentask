import { Pressable, View } from "react-native";
import { Button, Divider, FormInput, Typography } from "../atoms";
import { Controller, useForm } from "react-hook-form";
import { FormLabelInput } from "../molecules";
import { CalendarFilledIcon } from "../assets/icons";
import { COLORS } from "../../constants/theme";
import * as z from "zod";
import { useEffect, useRef, useState } from "react";
import useDateTimePicker from "../../hooks/common/useDateTimePicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import dayjs from "dayjs";

const CalendarEventSchema = z
  .object({
    title: z.string().min(6, { message: "Title is Required" }),
    description: z.string().min(10, {
      message: "Description is Required, Min 8 char",
    }),
    date: z.string().datetime({ message: "Date is Required" }).optional(),
    start_time: z
      .string()
      .datetime({ message: "start_time is required" })
      .optional(),
    end_time: z
      .string()
      .datetime({ message: "end_time is required" })
      .optional(),
  })
  .refine(
    ({ start_time, end_time }) =>
      dayjs(end_time).isAfter(start_time, "seconds"),
    {
      message: "End Time has to be greater than Start Time",
      path: ["start_date", "end_date"],
    }
  );

interface Props {
  closeModal: () => void;
}

const AddCalendarEventForm = ({ closeModal }: Props) => {
  const fieldRef = useRef<string | null>(null);
  const [eventDate, setEventDate] = useState("");
  const [eventStartTime, setEventStartTime] = useState(
    new Date().toISOString()
  );
  const [eventEndTime, setEventEndTime] = useState(new Date().toISOString());

  const {
    date,
    datePickerVisible,
    mode,
    showDatePicker,
    hideDatePicker,
    handleConfirm,
  } = useDateTimePicker();

  const { control, handleSubmit } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    const finalData = {
      title: data.title,
      description: data.description,
      start_time: eventStartTime,
      end_time: eventEndTime,
      date: eventDate,
    };
    console.log("parse ->", CalendarEventSchema.safeParse(finalData));
  };

  useEffect(() => {
    if (fieldRef.current === "event_date") {
      console.log(date);
      setEventDate(date.toISOString());
    } else if (fieldRef.current === "start_time") {
      setEventStartTime(date.toISOString());
    } else if (fieldRef.current === "end_time") {
      setEventEndTime(date.toISOString());
    }
  }, [date]);

  return (
    <>
      <View>
        <View className="px-4 flex flex-row items-center justify-between">
          <Pressable className="active:scale-95" onPress={closeModal}>
            <Typography fw="regular" twClassName="text-primaryBlue-300">
              Cancel
            </Typography>
          </Pressable>

          <Typography fw="semiBold" twClassName="text-lg">
            Add Event
          </Typography>

          <Pressable
            onPress={handleSubmit(onSubmit)}
            className="active:scale-95"
          >
            <Typography fw="medium" twClassName="text-primaryBlue-500">
              Add
            </Typography>
          </Pressable>
        </View>
        <Divider />

        <View className="flex gap-y-2 px-6 py-4">
          <View>
            <FormLabelInput
              label="Title"
              control={control}
              name="title"
              placeholder="Event Title"
            />
          </View>
          <View>
            <FormLabelInput
              label="Description"
              control={control}
              name="description"
              placeholder="Event Description"
              multiline
            />
          </View>
        </View>
        <Divider type="clean" />
        <View className="flex gap-y-3 mt-4">
          {/** date field */}
          <View className="px-6 flex flex-row justify-between ">
            <Typography fw="medium" twClassName="text-lg">
              Date
            </Typography>
            <Pressable
              onPress={(e) => {
                fieldRef.current = "event_date";
                showDatePicker("date");
              }}
              className="flex flex-row items-center"
            >
              <CalendarFilledIcon
                fill={COLORS.primaryBlue[400]}
                className="mr-2"
              />
              <Typography fw="medium">
                {dayjs(eventDate).format("DD MMM, YYYY")}
              </Typography>
            </Pressable>
          </View>
          {/** date field */}

          <View>
            <Divider />
          </View>

          {/** start time field */}
          <View className="px-6 flex flex-row justify-between items-center">
            <Typography fw="medium" twClassName="text-lg">
              Start
            </Typography>
            <Pressable
              onPress={() => {
                fieldRef.current = "start_time";
                showDatePicker("time");
              }}
              className="p-1 rounded-lg border border-primaryBlue-300"
            >
              <Typography
                fw="medium"
                twClassName="text-lg text-primaryBlue-300"
              >
                {dayjs(eventStartTime).format("HH:mm")}
              </Typography>
            </Pressable>
          </View>
          <View>
            <Divider />
          </View>
          {/** end time field */}
          <View className="px-6 flex flex-row justify-between ">
            <Typography fw="medium" twClassName="text-lg">
              End
            </Typography>
            <Pressable
              onPress={() => {
                fieldRef.current = "end_time";
                showDatePicker("time");
              }}
              className="p-1 rounded-lg border border-primaryBlue-300"
            >
              <Typography
                fw="medium"
                twClassName="text-lg text-primaryBlue-300"
              >
                {dayjs(eventEndTime).format("HH:mm")}
              </Typography>
            </Pressable>
          </View>
          <View>
            <Divider />
          </View>
        </View>
      </View>
      {datePickerVisible && (
        <DateTimePickerModal
          date={date}
          isVisible={datePickerVisible}
          mode={mode}
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      )}
    </>
  );
};

export default AddCalendarEventForm;
