import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "@/src/types";
import Header from "@/src/components/header/Header";

const Detail = () => {
  const {
    params: { date, title, explanation, url },
  } = useRoute<NativeStackNavigationProp<RootStackParams, "Detail">["route"]>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.explanation}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default Detail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 255)",
    paddingHorizontal: 16,
  },
  content: {
    backgroundColor: "#2c449d",
    marginVertical: 24,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
    flex: 1,
  },
  image: {
    width: "100%",
    height: "50%",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
    marginBottom: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  date: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  explanationContainer: {
    marginVertical: 16,
  },
  explanation: {
    color: "#fff",
    fontSize: 15,
  },
});
