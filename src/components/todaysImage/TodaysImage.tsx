import React, { FC } from "react";
import { View, Text, Image, Button } from "react-native";
import { PostImage as PostImageType } from "../../types/index";
import { usePostImageNavigation } from "@/src/Hooks/usePostImageNavigation";
import { sharedStyles } from "../../Styles/Styles";

const TodaysImage: FC<PostImageType> = ({ date, title, explanation, url }) => {
  const handleViewPress = usePostImageNavigation();

  return (
    <View style={sharedStyles.container}>
      <Image source={{ uri: url }} style={{ width: "100%", height: 190 }} />
      <Text style={sharedStyles.title}>{title}</Text>
      <Text style={sharedStyles.date}>{date}</Text>
      <View style={sharedStyles.buttonContainer}>
        <Button
          title="View"
          onPress={() => handleViewPress(date, title, explanation, url!)}
        />
      </View>
    </View>
  );
};

export default TodaysImage;
