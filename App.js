import React, { useContext } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";

import { UserProvider, UserContext } from "./src/context/UserContext";
import SplashScreen from "./src/screens/SplashScreen";

import TabNavigator from "./src/navigation/TabNavigator";

import AuthNavigator from "./src/navigation/AuthNavigator";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { enableScreens } from "react-native-screens";
enableScreens();

const Stack = createNativeStackNavigator();

const queryClient = new QueryClient();

// V1 - Stack.Screen TabNavigator
// function RootNavigator() {
//   const { user, isLoading } = useContext(UserContext);

//   if (isLoading) return <SplashScreen />;

//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <NavigationContainer>
//         {/* <Stack.Navigator screenOptions={{ headerShown: false }}>
//           {!user ? (
//             <Stack.Screen name="Login" component={LoginScreen} />
//           ) : (
//             <Stack.Screen name="Main" component={TabNavigator} />
//           )}
//         </Stack.Navigator> */}
//         {/* <DrawerNavigator/> */}

//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//           {!user ? (
//             <Stack.Screen name="Login" component={LoginScreen} />
//           ) : (
//             <Stack.Screen name="Main" component={DrawerNavigator} />
//           )}
//         </Stack.Navigator>
//       </NavigationContainer>
//     </GestureHandlerRootView>
//   );
// }

// V2 - Navigator - AuthNavigator
function RootNavigator() {
  const { user, isLoading } = useContext(UserContext);

  if (isLoading) return <SplashScreen />;

  return (
    <NavigationContainer>
      {user ? <DrawerNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <UserProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <QueryClientProvider client={queryClient}>
          <RootNavigator />
        </QueryClientProvider>
      </GestureHandlerRootView>
    </UserProvider>
  );
}
