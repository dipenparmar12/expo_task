import { Text, View, StyleSheet } from "react-native";
import AppRoot from "./app/index";

export default function Index() {
  return (
    // <View style={styles.container}>
    //   <Text>Home screen</Text>
    // </View>
    <AppRoot/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
  },
});
