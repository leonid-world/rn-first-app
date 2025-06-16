import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import api from "../utils/axiosInstance";

const fetchEdus = async () => {
  const res = await api.get("/api/v1/user/contents/edus", {
    rows: 10,
    currentPage: 1,
    courseSeq: 39,
  });

  console.log("edus res : ", res);
};

export default function PostListScreen({ navigation }) {
  fetchEdus();
  const posts = [
    {
      id: 1,
      title: "첫 번째 글",
    },
    {
      id: 2,
      title: "두 번째 글",
    },
    {
      id: 3,
      title: "세 번째 글",
    },
  ];

  return (
    <View style={styles.container}>
      {posts.map((post) => (
        <TouchableOpacity
          key={post.id}
          style={styles.item}
          onPress={() =>
            navigation.navigate("PostDetail", {
              id: post.id,
              title: post.title,
            })
          }
        >
          <Text>{post.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: {
    padding: 15,
    marginVertical: 5,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
});
