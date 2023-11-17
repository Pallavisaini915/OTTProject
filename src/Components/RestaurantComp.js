import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";

const RestaurantComp = () => {
  const places = [
    {
      id: 1,
      imageurl:
        "https://media-cdn.tripadvisor.com/media/photo-s/0f/71/05/59/piccante.jpg",
      name: "24/7 Restaurant at Chandigarh",
      type: "American,Fast food",
      distance: "0.2 km away",
    },
    {
      id: 2,
      imageurl:
        "https://media-cdn.tripadvisor.com/media/photo-s/17/10/28/ed/35-brewhouse.jpg",
      name: "Barbeque Nation",
      type: "North Indian, Chinese Barbecue",
      distance: "2.5 km away",
    },
    {
      id: 3,
      imageurl:
        "https://www.shoutlo.com/assets/images/merchant_images/merchant-175230-5d4c14069824e.jpg",
      name: "Backpackers Cafe",
      type: "Cafe, Vegetaeian Friendly",
      distance: "3.0 km away",
    },
    {
      id: 4,
      imageurl:
        "https://res.cloudinary.com/purnesh/image/upload/f_auto/v1507272712/nik-bakers813.jpg",
      name: "Nik Bakers",
      type: "Cafe,Fast food",
      distance: "2.5 km away",
    },
    {
      id: 5,
      imageurl:
        "https://amazingarchitecture.com/storage/1093/responsive-images/playground-restaurant-loop-design-studio-chandigarh-india___media_library_original_1344_756.jpg",
      name: "StarBucks",
      type: "American ,Cafe",
      distance: "3.0 km away",
    },
    
  ];
  return (
    <View style={{ marginTop: 20 }}>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <View
            style={{
              borderBottomColor: "grey",
              borderBottomWidth: 1,
              flexDirection: "row",

              padding: 15,
              paddingHorizontal: 16,
              marginHorizontal: 16,
              marginBottom: 10,
            }}
          >
            
            <View>
              <Image
                source={{ uri: item.imageurl }}
                style={{ height: 100, width: 130, borderRadius: 10 }}
              />
            </View>
            <View style={{ marginLeft: 50 }}>
              <Text>{item.name}</Text>
              <Text>{item.type}</Text>
              <Text>{item.distance}</Text>
            </View>
          </View>
          
        )}
      ></FlatList>
    </View>
  );
};

export default RestaurantComp;
