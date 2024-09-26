import { StyleSheet } from "react-native";

export const sharedStyles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(18, 39, 113, 255)", // o el color que necesites
    borderRadius: 25,
    marginBottom: 12,
    padding: 16,
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  date: {
    color: "white",
    fontSize: 16,
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});
