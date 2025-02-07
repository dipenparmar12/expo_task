import React, { useContext } from "react";
import { View, Text } from "react-native";
import { tw } from "tailwindcss-react-native";
import Button from "../components/Button";
import { AuthContext } from "../context/AuthContext";
import {
  PaperProvider,
  Avatar,
  Card,
  Title,
  Paragraph,
} from "react-native-paper";

const HomeScreen = () => {
  const { logout, userInfo } = useContext(AuthContext);

  return (
    <PaperProvider>
      <View style={tw("flex-1 justify-center items-center bg-gray-100")}>
        <Card style={tw("w-11/12 p-6")}>
          <Card.Title
            title={`Welcome, ${userInfo?.email || "User"}!`}
            left={(props) => <Avatar.Icon {...props} icon="account-circle" />}
          />
          <Card.Content>
            <Paragraph>This is your home screen. You are logged in.</Paragraph>
          </Card.Content>
          <Card.Actions style={tw("justify-end")}>
            <Button title="Logout" onPress={logout} style={tw("bg-red-500")} />
          </Card.Actions>
        </Card>
      </View>
    </PaperProvider>
  );
};

export default HomeScreen;
