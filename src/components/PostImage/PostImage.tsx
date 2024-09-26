import React, { FC } from "react";
import { PostImage as PostImageType } from "../../types";
import { View, Text, Button } from "react-native";
import { usePostImageNavigation } from "@/src/Hooks/usePostImageNavigation";
import { sharedStyles } from "../../Styles/Styles";

const PostImage: FC<PostImageType> = ({ title, date, explanation, url }) => {
  const handleViewPress = usePostImageNavigation();

  return (
    <View style={sharedStyles.container}>
      <Text style={sharedStyles.title}>{title}</Text>
      <Text style={sharedStyles.date}>{date}</Text>
      <View style={sharedStyles.buttonContainer}>
        <Button
          title="View"
          onPress={() => handleViewPress(date, title, explanation, url)}
        ></Button>
      </View>
    </View>
  );
};

export default PostImage;
