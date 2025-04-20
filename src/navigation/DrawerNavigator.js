import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'

const Drawer = createDrawerNavigator();

// export default function DrawerNavigator() {

// }


const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown:true,
            }}>
                <Drawer.Screen name="Home" component={HomeScreen}/>
                <Drawer.Screen name="Profile" component={ProfileScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigator;