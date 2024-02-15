import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "../nav/TabNavigation";

const Drawer = createDrawerNavigator();

export default function DrawNavigation() {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "TabNavigation") {
              iconName = focused ? "home" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          drawerActiveTintColor: "tomato",
          drawerInactiveTintColor: "gray",
        })}
      >
        <Drawer.Screen
          component={TabNavigation}
          name="TabNavigation"
          options={{
            drawerLabel: "Home",
            headerTitle: "Welcome Back",
            headerTitleStyle: { fontSize: 14, color: "black" },
            headerStyle: {
              backgroundColor: "pink",
            },

            // ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
