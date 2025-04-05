import React, { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";

export default function HomeScreen({ navigation }) {

  const { user } = useContext(UserContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      {user ? `${user.mbrName} 님, 정상에서 기다립니다! ⛰️` : '로그인 먼저 하세요!'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontSize: 20 },
});
