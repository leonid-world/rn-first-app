// /utils/axiosInstance.js
import axios from "axios";
import { Alert } from "react-native";
import { getUser, setUser, logout, removeUser } from "./authStorage"; // AsyncStorage 연동 시 사용 (선택)
import * as RootNavigation from "./RootNavigation"; // 👈 navigation 외부에서 쓰기 위함

const instance = axios.create({
  baseURL: "http://localhost:8080/",
  // baseURL: "https://always-e5aa7517715d.herokuapp.com/",
  headers: {
    "Content-Type": "application/json",
  },
});

// // 요청 시 Authorization 헤더 자동 주입
instance.interceptors.request.use(
  async (config) => {
    const user = await getUser(); // 또는 Context에서 user 가져오기
    if (user?.Authorization) {
      config.headers.Authorization = `${user.Authorization}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// // 응답 시 401 → 자동 로그아웃 or 토큰 재발급 시도
instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.data?.code == 1201) {
      Alert.alert("세션 만료", "다시 로그인해주세요");
      // await logout(); // AsyncStorage 초기화 or context 초기화
      // navigation 못 쓰니까 이벤트로 로그인 페이지로 보낼 수도 있음
      removeUser();
      RootNavigation.navigate("Login"); // 👈 강제 리디렉션
      return Promise.reject(new Error("토큰 만료")); // 쿼리에도 에러 전달
    }
    return Promise.reject(error);
  }
);

export default instance;
