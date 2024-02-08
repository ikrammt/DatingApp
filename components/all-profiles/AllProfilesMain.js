import Header from "../header-footer/Header";
import Footer from "../header-footer/Footer";
import { StyleSheet, Text, View, SafeAreaView, useColorScheme, ImageBackground, Switch } from "react-native";
import ListProfiles from "./ListProfiles";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import React, { useState } from "react";

export default function AllProfilesMain() {
  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const getBackgroundImage = () => {
    return isDarkMode ? require('/Users/ikrammtimet555gmail.com/MEDTECH/Cources/SE-junior/term2/Mobile/Dating App/LAB2/DatingApp/assets/bg-dark.jpg') : require('/Users/ikrammtimet555gmail.com/MEDTECH/Cources/SE-junior/term2/Mobile/Dating App/LAB2/DatingApp/assets/bg-light.jpg');
  };
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ImageBackground
      source={getBackgroundImage()}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Header />
        <View>
          <Text style={[styles.title, { color: isDarkMode ? "white" : "black" }]}>
            All Profiles Ready to Start!
          </Text>
          <Text style={[styles.title, { color: isDarkMode ? "pink" : "purple" }]}>
            colorScheme : {isDarkMode ? "dark" : "light"}
          </Text>
          <View style={styles.switchContainer}>
            <Switch
              trackColor={{ false: '#767577', true: 'pink' }}
              thumbColor={isDarkMode ? 'black' : '#f4f3f4'}
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              style={styles.switch}
            />
          </View>
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
  switchContainer: {
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    marginTop: 10,
    fontSize: 18,
  },
  switch: {
    margin: 10,
    alignItems: 'center',
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
