import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParams } from "../types";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;

export const usePostImageNavigation = () => {
    const { navigate } = useNavigation<PostImageNavigationProps>();
  
   
    const handleViewPress = (date: string, title: string, explanation: string, url: string) => {
      navigate("Detail", { date, title, explanation, url });
    };
  
    return handleViewPress;
  };