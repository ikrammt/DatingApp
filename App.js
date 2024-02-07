// Step 1. Add useColorScheme
import { StyleSheet, Text, View, useColorScheme, Switch, ImageBackground} from "react-native";
import AllProfilesMain from "./components/all-profiles/AllProfilesMain";
import AllCharacteristics from "./components/characteristics/AllCharacteristics";
import Form from "./components/Form";
import React, { useState } from "react";
// Step 2. Add the necessary NavigationContainer imports
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";

// Step 3. Create an instance of the stack navigator
const Stack = createNativeStackNavigator();

export default function App() {
  // Step 4. Initialize the useColorScheme hook.
  const colorScheme = useColorScheme();
  /**
   * Step 5:
   * Integrate the provided React Navigation code into your React Native project to establish a themed navigation container.
   * This setup utilizes a stack navigator with a hidden header and includes a screen named "AllProfilesMain" linked to the AllProfilesMain component.
   */
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === "dark");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const getBackgroundImage = () => {
    return isDarkMode ? require('./assets/bg-dark.jpg') : require('./assets/bg-light.jpg');
  };

  return (
    <ImageBackground
      source={getBackgroundImage()}
      style={styles.backgroundImage}
    >
      <NavigationContainer theme={isDarkMode ? styles.DarkTheme : styles.LightTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="AllProfilesMain">
            {(props) => <AllProfilesMain {...props} isDarkMode={isDarkMode} />}
          </Stack.Screen>
        </Stack.Navigator>
        <View style={styles.switchContainer}>
          {/* Add switch button to toggle Dark/Light mode */}
          <Switch
            value={isDarkMode}
            onValueChange={toggleDarkMode}
            style={styles.switch}
          />
        </View>
      </NavigationContainer>
    </ImageBackground>
  );
}
// Step 6. Define LightTheme and DarkTheme
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: "white", 
  },
  switch: {
    alignSelf: "flex-end",
    margin: 10,
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
