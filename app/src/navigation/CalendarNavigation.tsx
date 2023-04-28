import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CalendarStackParamList } from "../@types/navigation";
import CalendarScreen from "../screens/calendar/CalendarScreen";
import CalendarDetailScreen from "../screens/calendar/CalendarDetailScreen";
import CalendarSearchScreen from "../screens/calendar/CalendarSearchScreen";

const Stack = createNativeStackNavigator<CalendarStackParamList>();

export default function CalendarNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="calendar_main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="calendar_main" component={CalendarScreen} />
      <Stack.Screen name="calendar_detail" component={CalendarDetailScreen} />
      <Stack.Screen name="calendar_search" component={CalendarSearchScreen} />
    </Stack.Navigator>
  );
}
