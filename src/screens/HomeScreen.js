import React, { useContext } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { UserContext } from "../context/UserContext";
import { removeUser } from "../utils/authStorage";

export default function HomeScreen({ navigation }) {

  const { user, setUser } = useContext(UserContext);

  const handleLogout = async () => {
    setUser(null);
    await removeUser();
    navigation.replace('Login'); //뒤로가기 방지 및 로그인으로 리셋
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>홈 화면</Text>
      <Text style={styles.nickname}>정상에서 기다리고 있던 {user.mbrName}님⛰️</Text>
      <Button title="로그아웃" onPress={handleLogout}/>
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
  title: { fontSize: 24, marginBottom: 20 },
  nickname: { fontSize: 18, marginBottom: 10 },
  token: { fontSize: 14, color: '#666', marginBottom: 20 },

});
