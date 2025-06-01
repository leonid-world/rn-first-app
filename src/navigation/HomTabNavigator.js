import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";
import PostStackNavigator from "./PostStackNavigator";

const Tab = createBottomTabNavigator();

export default function HomTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="홈" component={HomeScreen} />
      <Tab.Screen name="설정" component={SettingsScreen} />
      <Tab.Screen name="게시판" component={PostStackNavigator} />
    </Tab.Navigator>
  );
}
