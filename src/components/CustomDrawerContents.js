import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { UserContext } from "../context/UserContext";

export default function CustomDrawerContent(props) {
  const { user, setUser } = useContext(UserContext);

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{ flex: 1 }}>
      <View style={styles.header}>
        <Text style={styles.username}>
          👋 안녕하세요, {user?.mbrName || "사용자"} 님!
        </Text>
      </View>

      <View style={styles.body}>
        <DrawerItemList {...props} />
      </View>

      <TouchableOpacity style={styles.logout} onPress={() => setUser(null)}>
        <Text style={styles.logoutText}>🚪 로그아웃</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  username: {
    fontSize: 16,
    fontWeight: "bold",
  },
  body: {
    flex: 1,
    paddingTop: 10,
  },
  logout: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#eee",
  },
  logoutText: {
    color: "red",
    fontWeight: "bold",
  },
});
