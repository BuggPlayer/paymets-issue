import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Button, View, Text, TouchableOpacity, Image } from "react-native";
import { CustomDrawerContent } from "./customDrawer";
import { appBottomTab } from "./tab";
const Drawer = createDrawerNavigator();

export const appSideDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeTintColor: "#e91e63",
        itemStyle: { marginVertical: 30 }
      }}
    >
      <Drawer.Screen name="Home" component={appBottomTab} />
    </Drawer.Navigator>
  );
};
