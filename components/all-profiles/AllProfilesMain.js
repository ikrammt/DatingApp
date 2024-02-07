import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import { StyleSheet, Text, View, SafeAreaView, useColorScheme, ImageBackground } from "react-native";
import ListProfiles from "./ListProfiles";

export default function AllProfilesMain({ isDarkMode }) {
  const colorScheme = useColorScheme();
  const getBackgroundImage = () => {
    return isDarkMode ? require('/Users/ikrammtimet555gmail.com/MEDTECH/Cources/SE-junior/term2/Mobile/Dating App/LAB2/DatingApp/assets/bg-dark.jpg') : require('/Users/ikrammtimet555gmail.com/MEDTECH/Cources/SE-junior/term2/Mobile/Dating App/LAB2/DatingApp/assets/bg-light.jpg');
  };
  return (
    <ImageBackground
      source={getBackgroundImage()}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <Text style={[styles.title, { color: isDarkMode ? "white" : "black" }]}>
          All Profiles Ready to Start!
        </Text>
        <Text style={[styles.title, { color: isDarkMode ? "pink" : "purple" }]}>
          colorScheme : { isDarkMode ? "dark" : "light" }
        </Text>
        <ListProfiles />
        <Footer />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
   backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    marginTop: 10,
    fontSize: 16,
  },
});
