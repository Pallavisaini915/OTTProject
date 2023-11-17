import React from "react";
import { SafeAreaView, View} from "react-native";

import Routes from "./src/Navigations/Routes";
import Header from "./src/Components/Header";

const App = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backfaceVisibility: "visible",
        backgroundColor: "#0096FF",
      }}
    >
      <Routes />
      
    </SafeAreaView>
  );
};
export default App;
