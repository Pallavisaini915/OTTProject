import React from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import imagepath from "../constants/imagepath";

const Channels = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Paquetes disponibles en tu zona?</Text>
          <TouchableOpacity>
            <Text style={styles.link}>See all</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.channelRow}>
          <View style={styles.channelItem}>
            <Image style={styles.channelImage} source={imagepath.CNN} />
            <Text style={styles.channelText}>CNN HD News</Text>
          </View>
          <View style={styles.channelItem}>
            <Image
              style={[styles.channelImage, styles.movieImage]}
              source={imagepath.Starmovies}
            />
            <Text style={styles.channelText}>Star Movies</Text>
          </View>
          <View style={styles.channelItem}>
            <Image style={styles.channelImage} source={imagepath.discovery} />
            <Text style={styles.channelText}>Discovery</Text>
          </View>
          <View style={styles.channelItem}>
            <Image style={styles.channelImage} source={imagepath.StarSports} />
            <Text style={styles.channelText}>Star Sports</Text>
          </View>
        </View>

        <View style={styles.divider}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Graphik Medium",
    marginTop: 30,
    marginLeft: 20,
  },
  link: {
    color: "#0096FF",
    fontWeight: "bold",
    marginRight:130,
    margin:30
  },
  channelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
  },
  channelItem: {
    flex: 1,
  
    marginLeft: 20,
  },
  channelImage: {
    height: 80,
    width: 130,
    borderRadius: 10,
  },
  movieImage: {
    borderWidth: 1,
    borderColor: "black",
  },
  channelText: {
    fontSize: 15,
    fontFamily: "Graphik Medium",
    textAlign: "center",
    fontWeight: "bold",
    marginTop:20
  },
  divider: {
    borderBottomColor: "lightgrey",
    borderBottomWidth: 8,
    marginTop: 50,
  },
});

export default Channels;
