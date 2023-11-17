import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView,StyleSheet } from "react-native";
import imagepath from "../constants/imagepath";

const Events = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Latest Events</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal={true}>
        <View style={styles.eventContainer}>
          {/* Event 1 */}
          <View style={styles.eventCard}>
            <Image style={styles.eventImage} source={imagepath.image4} />
            <View style={styles.dateContainer}>
              <Image style={styles.icon} source={imagepath.calender2} />
              <Text style={styles.date}>29 Jun,2019</Text>
            </View>
            <Text style={styles.eventTitle}>Speak your mind tour 2019</Text>
            <View style={styles.locationContainer}>
              <Image style={styles.icon} source={imagepath.locationon} />
              <Text style={styles.location}>Cannes, France</Text>
            </View>
          </View>

          {/* Event 2 */}
          <View style={styles.eventCard}>
            <Image style={styles.eventImage} source={imagepath.image2} />
            <View style={styles.dateContainer}>
              <Image style={styles.icon} source={imagepath.calender2} />
              <Text style={styles.date}>29 Jun,2019</Text>
            </View>
            <Text style={styles.eventTitle}>Speak your mind tour 2019</Text>
            <View style={styles.locationContainer}>
              <Image style={styles.icon} source={imagepath.locationon} />
              <Text style={styles.location}>Cannes, France</Text>
            </View>
          </View>

          {/* Event 3 */}
          <View style={styles.eventCard}>
            <Image style={styles.eventImage} source={imagepath.image3} />
            <View style={styles.dateContainer}>
              <Image style={styles.icon} source={imagepath.calender2} />
              <Text style={styles.date}>29 Jun,2019</Text>
            </View>
            <Text style={styles.eventTitle}>Speak your mind tour 2019</Text>
            <View style={styles.locationContainer}>
              <Image style={styles.icon} source={imagepath.locationon} />
              <Text style={styles.location}>Cannes, France</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 50,
  },
  titleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight:50
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 40,
  },
  seeAll: {
    color: "#0096FF",
    fontWeight: "bold",
    marginTop: 40,
  },
  eventContainer: {
    flexDirection: "row",
    marginTop: 40,
  },
  eventCard: {
    position: "relative",
    marginRight: 20,
  },
  eventImage: {
    height: 200,
    width: 300,
    borderRadius: 10,
  },
  dateContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 60,
    left: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  date: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    bottom: 30,
    left: 20,
    color: "white",
  },
  locationContainer: {
    position: "absolute",
    flexDirection: "row",
    bottom: 5,
    left: 18,
  },
  location: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
});

export default Events;
