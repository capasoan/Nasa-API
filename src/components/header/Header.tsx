import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.tittle}>Explore</Text>
      </View>
      <View style={styles.rigthContainer}>
        <Image
          source={require("../../assets/nasalog.png")}
          style={styles.image}
        />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  rigthContainer: {
    flex: 1,
    padding: 30,
    alignItems: "flex-end",
  },
  leftContainer: {
    flex: 1,
    padding: 30,
    alignItems: "flex-start",
  },
  tittle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 60,
    height: 60,
  },
});
