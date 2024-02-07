import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import { StyleSheet, Text, View, SafeAreaView, useColorScheme } from "react-native";
import ListProfiles from "./ListProfiles";

export default function AllProfilesMain() {
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>All Profiles Ready to Start!</Text>
      <Text style={[styles.title, colorScheme === "light" ? { color: "red" } : { color: "green" }]}>
        colorScheme : {colorScheme}
      </Text>
      <ListProfiles />
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});
