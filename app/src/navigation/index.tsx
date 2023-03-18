import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import MainNavigation from "./MainNavigation";
import EntryNavigation from "./EntryNavigation";

const Stack = createNativeStackNavigator();

export default function Navigation() {
  const [authenticated, _] = useState(true);

  return (
    <NavigationContainer>
      {authenticated ? <MainNavigation /> : <EntryNavigation />}
    </NavigationContainer>
  );
}
