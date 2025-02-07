import React, { useState, useContext } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { tw } from "tailwindcss-react-native";
import { AuthContext } from "../context/AuthContext";
import Input from "../components/Input";
import Button from "../components/Button";
import { colors } from "../utils/colors";
import { PaperProvider } from "react-native-paper";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, signup } = useContext(AuthContext);

  const handleSignup = () => {
    signup(email, password);
  };

  if (isLoading) {
    return (
      <View style={tw("flex-1 justify-center items-center")}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <PaperProvider>
      {" "}
      <View style={tw("flex-1 justify-center px-6 bg-gray-100")}>
        <Text style={tw("text-2xl font-bold text-center mb-8")}>Signup</Text>
        <Input
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Signup" onPress={handleSignup} style={tw("mt-4")} />
        <Button
          title="Already have an account? Login"
          onPress={() => navigation.goBack()}
          style={[
            tw("mt-2 bg-transparent border border-blue-500"),
            { backgroundColor: "transparent" },
          ]}
          textStyle={tw("text-blue-500")}
        />
      </View>
    </PaperProvider>
  );
};


export default SignupScreen;