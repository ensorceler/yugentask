import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./MainNavigation";
import EntryNavigation from "./EntryNavigation";
import useAuthStore from "../store/useAuthStore";
import useGetUserInfo from "../hooks/apis/user/useGetUserInfo";
import { useEffect } from "react";
import { getApiAuth } from "../hooks/utils/apiRequestUtils";
import useAuth from "../hooks/common/useAuth";

export default function Navigation() {
  const { authenticated } = useAuth();

  return (
    <NavigationContainer>
      {authenticated ? <MainNavigation /> : <EntryNavigation />}
    </NavigationContainer>
  );
}
