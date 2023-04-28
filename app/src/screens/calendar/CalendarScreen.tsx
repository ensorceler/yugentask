import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CalendarTimelineEventCard, Topbar } from "../../ui/molecules";
import { CalendarMainScreenProps } from "../../@types/navigation";
import { View } from "react-native";
import { Button, CalendarDayChip, Divider, Typography } from "../../ui/atoms";
import { LeftArrowIcon, RightArrowIcon } from "../../ui/assets/icons";
import { TimelineCalendar } from "@howljs/calendar-kit";
import { DEVICE_WIDTH } from "../../constants/theme";
import BottomSheetModal from "../../components/BottomSheet/BottomSheet";
import { useState } from "react";
import { AddCalendarEventForm } from "../../ui/organisms";
import useGetCalendarEvents from "../../hooks/apis/calendar/useGetCalendarEvents";

export default function CalendarScreen({
  navigation,
}: CalendarMainScreenProps) {
  const [addEventModalOpen, setAddEventModalOpen] = useState(false);
  const { data } = useGetCalendarEvents();
  const closeAddEventModal = () => {
    setAddEventModalOpen(false);
  };

  const openAddEventModal = () => {
    setAddEventModalOpen(true);
  };

  const exampleEvents = [
    {
      id: "1",
      title: "Event 1",
      start: "2023-04-10T08:35:44.064Z",
      end: "2023-04-10T09:15:43.636Z",
      date: "2023-04-07",
    },
    {
      id: "2",
      title: "Event 1",
      start: "2023-04-10T13:45:15.229Z",
      end: "2023-04-10T17:15:43.636Z",
      date: "2023-04-07",
    },
    {
      id: "3",
      title: "Event 1",
      start: "2023-04-10T13:45:15.229Z",
      end: "2023-04-10T16:15:43.636Z",
      date: "2023-04-07",
    },
  ];

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <SafeAreaView className="flex-1 bg-white">
        {/** Header  Portion */}
        <View className="px-6 mb-4">
          <Topbar
            variant="search_add"
            headerName="Calendar"
            searchFn={() => {
              navigation.navigate("calendar_search");
            }}
            actionFn={openAddEventModal}
          />
          <Typography fw="regular">
            Choose a date to find out what products are coming
          </Typography>
        </View>

        <Divider type="clean" />

        {/** Calendar Total View and Events*/}
        <View className="p-6">
          {/** calendar month and left & right arrow */}
          <View className="flex flex-row justify-between items-center">
            <Typography fw="semiBold" twClassName="text-2xl">
              August 2022
            </Typography>
            <View className="flex flex-row items-center ">
              <Button
                variant="icon"
                icon={<LeftArrowIcon className="text-black" />}
              />
              <View className="ml-2" />
              <Button
                variant="icon"
                icon={<RightArrowIcon className="text-black" />}
              />
            </View>
          </View>

          {/** calendar dates small chips */}
          <View className="flex flex-row gap-x-3">
            <View>
              <CalendarDayChip active />
            </View>
            <View>
              <CalendarDayChip />
            </View>
            <View>
              <CalendarDayChip />
            </View>
          </View>
        </View>
        {/** calendar time table */}
        <View
          style={{
            flex: 1,
            width: DEVICE_WIDTH,
          }}
        >
          <TimelineCalendar
            viewMode="day"
            spaceFromTop={5}
            isShowHeader={false}
            events={exampleEvents}
            renderEventContent={(props) => (
              <CalendarTimelineEventCard
                title={props.title}
                description={props.description}
                start_time={props.start}
                end_time={props.end}
              />
            )}
            onPressEvent={(e) => {
              console.log(e);
              navigation.navigate("calendar_detail");
            }}
          />
        </View>
      </SafeAreaView>
      <BottomSheetModal
        visible={addEventModalOpen}
        closeModal={closeAddEventModal}
      >
        <AddCalendarEventForm closeModal={closeAddEventModal} />
      </BottomSheetModal>
    </SafeAreaProvider>
  );
}
