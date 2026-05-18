import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { AuthProvider } from "@/state-management/AuthContext";

export default function Layout() {
  return (
    <AuthProvider>
      <Tabs
        screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "black",
        },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="login"
        options={{
          title: "Login",
          tabBarIcon: ({ color }) => (
            <Ionicons name="log-in-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ color }) => (
            <Ionicons name="call-outline" size={24} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ color }) => (
            <Ionicons name="folder-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  </AuthProvider>
  );
}