import React, { useState } from "react";
import { View, Text, ImageBackground, StyleSheet, useColorScheme } from "react-native";
import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import ListProfiles from "./ListProfiles";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

export default function AllProfilesMain() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const getBackgroundImage = () => {
    return isDarkMode
      ? require('/Users/ikrammtimet555gmail.com/MEDTECH/Cources/SE-junior/term2/Mobile/Dating App/LAB2/DatingApp/assets/bg-dark.jpg')
      : require('/Users/ikrammtimet555gmail.com/MEDTECH/Cources/SE-junior/term2/Mobile/Dating App/LAB2/DatingApp/assets/bg-light.jpg');
  };

  return (
    <ImageBackground
      source={getBackgroundImage()}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header isDarkMode={isDarkMode} onToggleDarkMode={setIsDarkMode} />
        <View>
          <Text style={[styles.title, { color: isDarkMode ? "white" : "black" }]}>
            All Profiles Ready to Start!
          </Text>
          <Text style={[styles.title, { color: isDarkMode ? "pink" : "purple" }]}>
            colorScheme: {isDarkMode ? "dark" : "light"}
          </Text>
        </View>
        <ListProfiles />
      </View>
      <View>
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
    alignItems: "center",
    marginTop: 10,
    fontSize: 18,
  },
  LightTheme: {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
      text: "black",
      background: "white",
    },
  },
  DarkTheme: {
    ...DarkTheme,
    dark: false,
    colors: {
      ...DarkTheme.colors,
      text: "white",
      background: "black",
    },
  },
});
