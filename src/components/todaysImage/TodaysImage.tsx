import React, { FC } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";
import { PostImage } from "../../types/index";

const TodaysImage: FC<PostImage> = ({ date, title, explanation, url }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>{date}</Text>
      <View style={styles.ButtonContainer}>
        <Button title="View" />
      </View>
    </View>
  );
};

export default TodaysImage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    marginHorizontal: 24,
    borderRadius: 32,
    padding: 16,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    marginVertical: 12,
    fontWeight: "bold",
  },
  date: {
    color: "#fff",
    fontSize: 16,
  },

  ButtonContainer: {
    alignItems: "flex-end",
  },
});
