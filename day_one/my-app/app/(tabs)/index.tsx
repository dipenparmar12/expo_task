import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function TabsIndex() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>TabsIndex</Text>
        <Link href="/" style={styles.button}>
          Go to Home
        </Link>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
