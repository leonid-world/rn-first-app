import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const [name, setName] = useState("");
  const goToProfile = () => {
    navigation.navigate("Profile", {
      userName: name,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>홈 화면입니다 ⛰️</Text>
      <TextInput
        placeholder="이름 입력"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <Button title="프로필로 이동" onPress={goToProfile} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "80%",
    padding: 10,
    marginBottom: 20,
  },
});
