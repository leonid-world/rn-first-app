import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

import { UserProvider, UserContext } from "./src/context/UserContext";
import SplashScreen from './src/screens/SplashScreen';

import TabNavigator from "./src/navigation/TabNavigator";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const { user , isLoading } = useContext(UserContext);

  if (isLoading) return <SplashScreen/>;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {
          !user ? (
            <Stack.Screen name="Login" component={LoginScreen}/>
          ) : (
            <Stack.Screen name="Main" component={TabNavigator}/>
          )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default function App() {

  return (
    <UserProvider>
      <RootNavigator/>
    </UserProvider>
  );
}
