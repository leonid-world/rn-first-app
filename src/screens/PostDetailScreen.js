import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function PostDetailScreen() {
  const route = useRoute();
  const { id, title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📌 게시글 상세</Text>
      <Text>글 번호 : {id}</Text>
      <Text>글 제목 : {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});
