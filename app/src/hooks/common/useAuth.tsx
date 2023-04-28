import { useEffect } from "react";
import useAuthStore from "../../store/useAuthStore";
import useGetUserInfo from "../apis/user/useGetUserInfo";

export default function useAuth() {
  const { data, status, error } = useGetUserInfo();
  const { authenticated } = useAuthStore();
  useEffect(() => {
    if (status === "success") {
      console.log("data ->", data);
      console.log("error ->", error);
    }
  }, [status]);

  return {
    authenticated,
  };
}
