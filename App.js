import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import Chat from "./screens/Chat";
import Status from "./screens/Status";
import Calls from "./screens/Calls";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageGrid from "./screens/ImageGrid";
import MenuItem from "./components/MenuItem";

import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createStackNavigator();
const UpTab = createMaterialTopTabNavigator();
const BelowTab = createBottomTabNavigator();

const TopTab = (props) => {
  console.log("Top", props);
  return (
    <UpTab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        style: { backgroundColor: "#128C7E" },
        labelStyle: { fontSize: 16 },
      }}
    >
      <UpTab.Screen name="Chat" component={Chat} />
      <UpTab.Screen name="Status" component={Status} />
      <UpTab.Screen name="Calls" component={Calls} />
    </UpTab.Navigator>
  );
};

const BottomTab = (props) => {
  console.log("Bottom", props);
  return (
    <BelowTab.Navigator>
      <BelowTab.Screen name="App" component={TopTab} />
      <BelowTab.Screen name="Grid" component={ImageGrid} />
    </BelowTab.Navigator>
  );
};

export default function App(props) {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="WhatsApp"
            component={BottomTab}
            options={({ navigation }) => ({
              headerStyle: {
                backgroundColor: "#128C7E",
              },
              headerTitleStyle: {
                color: "white",
              },
              headerRight: () => (
                <View style={styles.header}>
                  <MaterialIcons name="search" size={24} color="white" />
                  <MenuItem />
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    flexWrap: "nowrap",
    marginRight:20
  },
  menu: {
    height: 100,
    width: 100,
  },
});
