import {
  View,
  Text,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import imagepath from "../constants/imagepath";

const Swappedimages = () => {
  return (
    <ScrollView horizontal={true}>
      <View style={{ flexDirection: "row" }}>
        <Image
          source={imagepath.OTT1}
          style={{
            borderColor: "grey",
            borderWidth: 1,
            height: 300,
            width: 450,
          }}
        />
        <Image
          source={imagepath.OTT2}
          style={{
            borderColor: "grey",
            borderWidth: 1,
            height: 300,
            width: 450,
          }}
        />
        <Image
          source={imagepath.OTT3}
          style={{
            borderColor: "grey",
            height: 300,
            width: 450,
            borderWidth: 1,
          }}
        />
        <Image
          source={imagepath.OTT4}
          style={{
            borderColor: "grey",
            height: 300,
            width: 450,
            borderWidth: 1,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default Swappedimages;
