import React, { useRef } from "react";
import { connect } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";
import RazorpayCheckout from "react-native-razorpay";
import RazorPay from '../RazorPay'

import { useDispatch, useSelector } from "react-redux";
import {
  subtractQuantity,
  removeItem,
  addToCart,
  addQuantity,
} from "../Redux/actions";
import AddToCart from "../Screens/addtocart";

import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  Pressable,
  ScrollView,
} from "react-native";
import { products } from "./../data";
import { CartButton } from "../Componets/UI/CartButton";
import ModelBtn from "../Componets/UI/ModelBtn";
import { DataTable } from "react-native-paper";


const CartScreen = (props) => {
  // const refRBSheet = useRef();
  // const btnsheet = () => {
  //   refRBSheet.current.open();
  // };
  const Cart = useSelector((state) => state.reducer.addedItems);
  const totalPrice = useSelector((state) => state.reducer.total);

  const dispatch = useDispatch();
  function _onAdd(id) {
    dispatch({
      type: "ADD_QUANTITY",
      id: id,
    });
  }
  function _onSub(id) {
    dispatch({
      type: "SUB_QUANTITY",
      id: id,
    });
  }

 async function checkOuthandle(){
  const dataa=await fetch('http://localhost:8000/pay',{method:'POST'}).then((d)=>
  d.json()
  )
  // const dataa=await dataa.json();
  console.log(dataa)
  var options = {
    description: "Credits towards consultation", // description
    image: "https://i.imgur.com/3g7nmJC.png", // image 
    currency: dataa.currency,
    key: 'rzp_test_R35cwM2Z5iHjvb', // rzp_test_lpoFU3fTbYZDu3 Something of this type!
     amount: dataa.amount,
    name: 'tshirt',
    order_id: dataa.id, //Replace this with an order_id created using Orders API. Learn more at https://razorpay.com/docs/api/orders.
    
    theme: { color: "#e23737" }
  };
          RazorpayCheckout.open(options)
            .then(data => {
              // handle success
              console.log('data hai',data)
              console.warn(`Success: ${data.razorpay_payment_id}`);
            })
            .catch(error => {
              // handle failure
              console.log('error hai',error)

              console.warn(`Error: ${error.code} | ${error.description}`);
            });
        }
 


  return (
    <ScrollView>
      <View>
      <RazorPay onPress={checkOuthandle} />
        {Cart.map((data, i) => {
          return (
            <View style={{ flexDirection: "row", padding: 20 }}>
              <Image
                style={{ height: 100, width: 80 }}
                source={{ uri: data.image }}
              />
              <View>
                <Text>{data.title}</Text>
                <Text>{"Price" + data.price}</Text>
                <Text>total for this:{data.price * data.quantity}</Text>
                <AddToCart
                  onPress={(id) => _onAdd(data.id)}
                  onSub={(id) => _onSub(data.id)}
                  quantity={data.quantity}
                />
              </View>

              <TouchableOpacity
                onPress={() => {
                  dispatch({
                    type: "REMOVE_ITEM",
                    id: data.id,
                  });
                }}
                style={{
                  backgroundColor: "yellow",
                  margin: 20,
                  height: 20,
                  borderRadius: 15,
                }}
              >
                <Text>Remove All </Text>
              </TouchableOpacity>
            </View>
          );
        })}
        <View style={{ borderRadius: 25, marginHorizontal: 50, marginTop: 10 }}>
          <Text>TotalPrice:{totalPrice}</Text>
          <Text>SubTotalTotal:</Text>
          <Text>essential Tex:</Text>
          <Text>Delivery: Free</Text>
        </View>

        <TouchableOpacity  style={{ alignSelf: "center", marginTop: 10 }}>
          <CartButton title="checkout" />
          {/* model sheet */}
          
        </TouchableOpacity>
       
        
      </View>
    </ScrollView>
  );
};

export default CartScreen;
