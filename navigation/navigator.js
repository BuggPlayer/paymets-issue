import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
// import { authStack } from "./Routes";
import { AppStack, AuthStack } from "./routes";
import { TapGestureHandler } from "react-native-gesture-handler";

export const Navigator = () => {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(true);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
