import React, { Component } from "react";
import RazorpayCheckout from "react-native-razorpay";
import { TouchableHighlight, Text, StyleSheet } from "react-native";

const Razorpay = (props)=> {
  
 
    return (
      <TouchableHighlight
        style={styles.button}
        onPress={props.onPress}
        
      >
        <Text style={styles.button_text_small}>
          Pay
          <Text style={styles.button_text}> ₹ 1,500</Text>
        </Text>
      </TouchableHighlight>
    );
 
}

export default Razorpay;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "rgb(249,194,1)",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    borderRadius: 5
  },
  button_text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins-Bold"
  },
  button_text_small: {
    fontFamily: "Poppins-Light",
    color: "white",
    fontSize: 16
  }
});