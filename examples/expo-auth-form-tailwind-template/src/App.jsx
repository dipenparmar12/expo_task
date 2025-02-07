import React from "react";
import { StyleSheet, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import AppNavigator from "./navigation/AppNavigator";
import { AuthProvider } from "./context/AuthContext";
import "./global.css"; // Import your global CSS

export default function App() {
  return (
    <TailwindProvider>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </TailwindProvider>
  );
}
