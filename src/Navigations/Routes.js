import React from "react";
import { View, Image, StyleSheet, processColor } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import navigationStrings from "./navigationStrings";
import * as Screens from "../Screens";
import imagepath from "../constants/imagepath";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Header from "../Components/Header";


const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabfunc = () => {
  return (
    <View>
      <Header />
      <TopTab.Navigator>
        <TopTab.Screen
          name={navigationStrings.Restaurant}
          component={Screens.Restaurant}
          
        />
        <TopTab.Screen
          name={navigationStrings.Hospital}
          component={Screens.Hospital}
        />
        <TopTab.Screen
          name={navigationStrings.Hotel0}
          component={Screens.Hotel}
        />
      </TopTab.Navigator>
    </View>
  );
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={navigationStrings.Home}
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "lightpink",
        }}
      >
        <Tab.Screen
          name={navigationStrings.Home}
          component={Screens.Home}
          options={{
            tabBarIcon: () => (
              <Image
                style={{ height: 52, width: 52 }}
                source={imagepath.home}
              />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.SecondScreen}
          component={Screens.SecondScreen}
          options={{
            tabBarIcon: () => (
              <Image style={styles.tabIcon} source={imagepath.cart} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.ThirdScreen}
          component={Screens.ThirdScreen}
          options={{
            tabBarIcon: () => (
              <Image style={styles.tabIcon} source={imagepath.calender} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.Restaurant}
          component={TopTabfunc}
          options={{
            tabBarIcon: () => (
              <Image style={styles.tabIcon} source={imagepath.restaurant} />
            ),
          }}
        />
        <Tab.Screen
          name={navigationStrings.FifthScreen}
          component={Screens.FifthScreen}
          options={{
            tabBarIcon: () => (
              <Image style={styles.tabIcon} source={imagepath.menu} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabIcon: {
    height: 30,
    width: 30,
  },
});

export default Routes;
