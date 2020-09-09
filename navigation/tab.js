import * as React from "react";
import { homeStackScreen, CartStackScreen } from "./stack";
import OderScreen from "../Screens/OderScreen";
import Products from "../Componets/ProductItem";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CartItem from "../Componets/CartItem";
import Category from "../Componets/CategoryItem";
import {MaterialCommunityIcons,Fontisto} from 'react-native-vector-icons';
import { useSelector } from "react-redux";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SliderItem from "../Componets/SliderItem";
import HorizontalProductItem from "../Componets/HorizontalProductItem";
import PhoneOtp from "../Screens/PhoneOtp";
import Home from "../Screens/Home";
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();
export const appBottomTab = () => {
  const Cart = useSelector((state) => state.reducer.addedItems);

  return (
    <Tab.Navigator activeColor="green"
    inactiveColor="black"
    barStyle={{ backgroundColor: '#ffff' }}>
       
      <Tab.Screen name="Home" component={homeStackScreen} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
      />
       <Tab.Screen options={{
        tabBarLabel: 'Search',
        tabBarIcon: ({ color }) => (
          <Fontisto name="search" color={color} size={26} />
        ),
      }} name="slider" component={CartStackScreen} />
      {/* <Tab.Screen name="Cart2" component={CartItem} />
      <Tab.Screen name={`Cart (${Cart.length})`} component={CartStackScreen} /> */}
      <Tab.Screen  options={{
        tabBarLabel: 'Oder',
        tabBarIcon: ({ color }) => (
          <Fontisto name="opencart" color={color} size={26} />
        ),
      }} name="Order" component={Products} />
      <Tab.Screen options={{
        tabBarLabel: 'Account',
        tabBarIcon: ({ color }) => (
          <Fontisto name="person" color={color} size={26} />
        ),
      }} name="Profile" component={Category} />
      
    {/*  <Tab.Screen name="Horizotal" component={HorizontalProductItem} /> */}
     
    </Tab.Navigator>
  );
};
