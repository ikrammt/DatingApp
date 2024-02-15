import React from "react";
import { View, Text, Switch, StyleSheet } from "react-native";

export default function Header({ isDarkMode, onToggleDarkMode }) {
  const toggleDarkMode = () => {
    onToggleDarkMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContent}>
        <Text style={styles.headerText}>Welcome Back</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#FEE2F8' }}
          thumbColor={isDarkMode ? 'black' : '#f4f3f4'}
          value={isDarkMode}
          onValueChange={toggleDarkMode}
          style={styles.switch}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
    width: 500,
    height: 80,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 30,
    color: 'black',
  },
  switch: {
    marginLeft: 50,
  },
});
