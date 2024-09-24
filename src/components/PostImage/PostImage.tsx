import React, { FC } from "react";
import { PostImage as PostImageType, RootStackParams } from "../../types";
import { View, Text, Button, StyleSheet } from "react-native";
import { usePostImageNavigation } from "@/src/Hooks/usePostImageNavigation";

const PostImage: FC<PostImageType> = ({ title, date, explanation, url }) => {
  const handleViewPress = usePostImageNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{title}</Text>
      <Text style={styles.fecha}>{date}</Text>
      <View style={styles.boton}>
        <Button
          title="View"
          onPress={() => handleViewPress(date!, title!, explanation!, url!)}
        ></Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18, 39, 113, 255)",
    borderRadius: 25,
    marginBottom: 12,
    padding: 16,
  },
  titulo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  fecha: {
    color: "white",
  },
  boton: {
    alignItems: "flex-end",
  },
});
export default PostImage;
