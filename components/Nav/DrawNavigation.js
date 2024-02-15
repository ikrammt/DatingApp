import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import TabNavigation from "./TabNavigation";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({ email, ...props }) => (
  <DrawerContentScrollView {...props}>
    <Text style={{ marginVertical: 10, marginLeft: 16 }}>Email: {email}</Text>
    <DrawerItemList {...props} />
  </DrawerContentScrollView>
);

export default function DrawNavigation({ route }) {
  const { email } = route.params;

  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawerContent email={email} {...props} />}
        screenOptions={({ route }) => ({
          drawerIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "TabNavigation") {
              iconName = focused ? "home" : "home-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          drawerActiveTintColor: "#0088D6",
          drawerInactiveTintColor: "gray",
        })}
      >
        <Drawer.Screen
          component={TabNavigation}
          name="TabNavigation"
          options={{
            drawerLabel: "Home",
            headerTitle: `Welcome Back, ${email.split('@')[0]}`,
            headerTitleStyle: { fontSize: 14, color: "black" },
            headerStyle: {
              backgroundColor: "pink",
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
