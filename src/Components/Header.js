import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import imagepath from "../constants/imagepath";

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.locationContainer}>
          <Image source={imagepath.locationon} style={styles.icon} />
          <Text style={styles.locationText}>Cannes, France</Text>
          <Image
            source={imagepath.expandmore}
            style={{ height: 20, width: 30, marginLeft: 12 }}
          />
        </View>
        <View>
          <Image source={imagepath.search} style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // minHeight: "100vh",
    // minWidth: "100vw",
    //flex: 1,
    backgroundColor: "white",
  },
  header: {
    display: "flex",
    height: 130,
    backgroundColor: "#0096FF",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 20,
  },
  locationContainer: {
    flexDirection: "row",
    gap: 0.4,
  },
  icon: {
    height: 20,
    width: 20,
    marginRight: 18,
  },
  locationText: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
 

  

});
