import React from "react";
import { View, Text, ScrollView } from "react-native";
import imagepath from "../../constants/imagepath";
import RestaurantComp from "../../Components/RestaurantComp";

const Restaurant = () => {
  return (
    
      
        <View>
        <View><Text style={{fontSize:18,color:"grey"}}>256 nearby restaurants</Text></View>
        <ScrollView><RestaurantComp/></ScrollView>
        <View><Text style={{textAlign:"center",color:"#0096FF",fontSize:18}}>Load more restaurants</Text></View>
      </View>
    
  );
};



export default Restaurant;
