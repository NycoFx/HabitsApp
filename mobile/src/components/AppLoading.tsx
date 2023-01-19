import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

export default function AppLoading() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#09090A",
      }}
    >
      <ActivityIndicator color="#7C3AED" size={56} />
    </View>
  );
}
