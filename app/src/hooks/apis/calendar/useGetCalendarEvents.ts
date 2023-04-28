import { useQuery } from "@tanstack/react-query";
import { getApiAuth } from "../../utils/apiRequestUtils";

const getCalendarEvents = async (date?: string) => {
  if (date !== undefined) {
    const response = await getApiAuth(
      `user/calendar/getCalendarEvents?date=${date}`
    );
    return response;
  } else {
    const response = await getApiAuth(`user/calendar/getCalendarEvents`);
    return response;
  }
};

export default function useGetCalendarEvents(date?: string) {
  return useQuery({
    queryKey: ["getCalendarEvents", date],
    queryFn: () => getCalendarEvents(date),
    enabled: !!date,
  });
}
