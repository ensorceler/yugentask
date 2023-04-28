import { useQuery } from "@tanstack/react-query";
import { getApiAuth } from "../../utils/apiRequestUtils";

const getUserInfo = async () => {
  const response = await getApiAuth(`user/profile`);
  return response;
};

export default function useGetUserInfo() {
  return useQuery({
    queryKey: ["getUserInfo"],
    queryFn: () => getUserInfo(),
  });
}
