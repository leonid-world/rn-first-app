import React, {useContext} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";

import { UserProvider, UserContext } from "./context/UserContext";
import SplashScreen from './screens/SplashScreen';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  const { user , isLoading } = useContext(UserContext);

  if (isLoading) return <SplashScreen/>;

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          !user ? (
            <Stack.Screen name="Login" component={LoginScreen}/>
          ) : (
            <Stack.Screen name="Home" component={HomeScreen}/>
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
