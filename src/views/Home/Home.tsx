import Header from "@/src/components/header";
import TodaysImage from "@/src/components/todaysImage/TodaysImage";
import LastFiveDaysImages from "@/src/components/lastFiveDaysImages/LastFiveDaysImages";
import { PostImage } from "@/src/types";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import axiosApi from "../../utils/axios";
import { format, sub } from "date-fns";

function Home() {
  const [todaysImage, setTodaysImage] = useState<PostImage>();
  const [last5DaysImages, setLast5DaysImages] = useState<PostImage[]>([]);

  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await axiosApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.error("Error loading today's image", error);
      }
    };

    const LoadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");

        const lastFiveDaysImagesResponse = await axiosApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLast5DaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        console.log(error);
      }
    };

    loadTodaysImage().catch(null);
    LoadLast5DaysImages().catch(null);
  }, []);

  // console.log("last5DaysImages", last5DaysImages);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages postImages={last5DaysImages} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7, 26, 93, 255)",
  },
});
