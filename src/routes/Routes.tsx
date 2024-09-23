import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home/Home";
import Detail from "../views/Detail/Detail";
import { RootStackParams } from "../types";
import header from "../components/header";
import { baseGestureHandlerProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon";
import { getBackgroundColorAsync } from "expo-system-ui";

const Stack = createNativeStackNavigator<RootStackParams>();
const routeScreenDefaultsOptions = {
  headerStyle: {
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
  headerTitleStyles: {
    color: "#FFF",
  },
};
const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={routeScreenDefaultsOptions}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={routeScreenDefaultsOptions}
      />
    </Stack.Navigator>
  );
};

export default Routes;
