import { StyleSheet } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import Routes from "@/src/routes/Routes";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Routes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});
