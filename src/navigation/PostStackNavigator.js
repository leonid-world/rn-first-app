import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PostListScreen from "../screens/PostListScreen";
import PostDetailScreen from "../screens/PostDetailScreen";

const Stack = createNativeStackNavigator();

export default function PostStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PostList"
        component={PostListScreen}
        options={{ title: "게시글 목록" }}
      />
      <Stack.Screen
        name="PostDetail"
        component={PostDetailScreen}
        options={{ title: "게시글 상세" }}
      />
    </Stack.Navigator>
  );
}
