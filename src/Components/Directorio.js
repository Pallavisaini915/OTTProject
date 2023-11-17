import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import imagepath from "../constants/imagepath";

const Directorio = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>Directorio</Text>
      </View>
      <View style={styles.directoryItems}>
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={imagepath.tv} />
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle}>OTT</Text>
            <Text style={styles.itemSubtitle}>List of Streaming</Text>
            <Text style={styles.itemSubtitle}>channels</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={imagepath.church} />
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle}>CHURCH</Text>
            <Text style={styles.itemSubtitle}>Exclusive religious</Text>
            <Text style={styles.itemSubtitle}>channel</Text>
          </View>
        </View>
        <View style={styles.itemContainer}>
          <Image style={styles.itemImage} source={imagepath.radio} />
          <View style={styles.itemDescription}>
            <Text style={styles.itemTitle}>RADIO</Text>
            <Text style={styles.itemSubtitle}>Listen all radio</Text>
            <Text style={styles.itemSubtitle}>station</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  heading: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 1,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "500",
    fontFamily: "Graphik Medium",
    marginRight:280,
    marginBottom:10,
    
    
    
  },
  directoryItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  itemContainer: {
    alignItems: "center",
  },
  itemImage: {
    height: 50,
    width: 50,
  },
  itemDescription: {
    height: 50,
    width: 120,
  },
  itemTitle: {
    fontWeight: "500",
    marginLeft: 35,
    fontSize:16
    ,
  },
  itemSubtitle: {
    color: "grey",
    marginLeft: 30,
  },
});

export default Directorio;
