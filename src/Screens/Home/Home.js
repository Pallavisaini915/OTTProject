import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

import imagepath from "../../constants/imagepath";
import Channels from "../../Components/Channels";
import Directorio from "../../Components/Directorio";
import Swappedimages from "../../Components/Swappedimages";
import Events from "../../Components/Events";

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.locationContainer}>
            <Image source={imagepath.locationon} style={styles.icon} />
            <Text style={styles.locationText}>Cannes, France</Text>
            <Image source={imagepath.expandmore} style={{height:20,width:30,marginLeft:12}} />
          </View>
          <View>
            <Image source={imagepath.search} style={styles.icon} />
          </View>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>Hola</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Signup</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.infoItem}>
            <Image source={imagepath.bullet} style={styles.bulletIcon} />
            <Text style={styles.infoText}>
              Access your Account balance and Pay online
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Image source={imagepath.bullet} style={styles.bulletIcon} />
            <Text style={styles.infoText}>Dedicated Customer Support</Text>
          </View>
        </View>

        <Channels />
        <Directorio />
        <View style={styles.swappedImagesContainer}>
          <Swappedimages />
        </View>
        <Events />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // minHeight: "100vh",
    // minWidth: "100vw",
    flex:1,
    backgroundColor: "white",
  },
  header: {
    display: "flex",
    height: 150,
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
  infoCard: {
    backgroundColor: "white",
    height: 200,
    width: 380,
    alignSelf: "center",
    margin: -85,
    borderRadius: 8,
    shadowOffset: { width: 3, height: 3 },
    shadowColor: "grey",
    shadowOpacity: 0.5,
  },
  infoTitle: {
    fontSize: 22,
    //fontFamily: "Graphik Semibold",
    fontWeight: "700",
    marginTop: 25,
    marginLeft: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  button: {
    marginHorizontal: 10,
    borderWidth: 1,
    height: 32,
    width: 152,
    borderRadius: 6,
    textAlign: "center",
    color: "#0096FF",
    borderColor: "#0096FF",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    color: "#0096FF",
  },
  infoItem: {
    flexDirection: "row",
    marginTop: 15,
  },
  bulletIcon: {
    height: 25,
    width: 18,
  },
  infoText: {
    color: "grey",
    fontSize: 15,
    marginTop: 5,
    
  },
  swappedImagesContainer: {
    marginTop: 50,
  },
});

export default Home;
