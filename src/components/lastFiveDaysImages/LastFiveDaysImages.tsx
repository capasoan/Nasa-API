import React, { FC } from "react";
import { PostImage as PostImageType } from "../../types";
import PostImage from "../PostImage/PostImage";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const LastFiveDaysImages: FC<{ postImages: PostImageType[] }> = ({
  postImages,
}) => {
  //   const { date, explanation, hdurl, media_type, service_version, title, url } =
  //     PostImage;
  //   console.log("AQUI", PostImage);
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}> Last Five Days </Text>
      <ScrollView style={styles.content}>
        {postImages?.map((postImage) => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 5,
  },
  content: {
    paddingHorizontal: 24,
  },
  titulo: {
    color: "white",
    fontSize: 16,
    marginBottom: 18,
  },
});
export default LastFiveDaysImages;
