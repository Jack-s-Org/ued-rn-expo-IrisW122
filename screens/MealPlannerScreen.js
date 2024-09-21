import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import {
  View,
  StyleSheet,
  Pressable,
  SafeAreaView,
  ImageBackground,
  Image,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const Tab = createMaterialTopTabNavigator();

const MonthScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("@/assets/Images/CalendarScreen.png")}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.contentContainer}>
          <Pressable onPress={() => navigation.replace("Splash")}>
            <Image
              source={require("@/assets/Images/startbutton.png")}
              style={styles.button}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const ScheduleScreen = () => {
  return (
    <SafeAreaView style={styles.container2}>
      <View style={styles.centerContent}>
        <ImageBackground
          source={require("@/assets/Images/ScheduleNoScreen.png")}
          style={styles.backgroundImage2}
        />
      </View>
    </SafeAreaView>
  );
};

const MealPlannerScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          navigation.replace("Main");
        }}
      >
        <AntDesign name="arrowleft" size={28} color="white" />
      </Pressable>

      <View style={styles.boxBehind} />

      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 16,
            textAlign: "center",
            width: "100%",
            marginLeft: 75,
          },
          tabBarItemStyle: { width: "50%" },
          tabBarIndicatorStyle: { backgroundColor: "white" },
          tabBarStyle: {
            height: 60,
            marginTop: 80,
            backgroundColor: "#FF9419",
          },
        }}
      >
        <Tab.Screen
          name="Month"
          component={MonthScreen}
          options={{ tabBarLabel: "Month" }}
        />
        <Tab.Screen
          name="Schedule"
          component={ScheduleScreen}
          options={{ tabBarLabel: "Schedule" }}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxBehind: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: "#FF9419",
    zIndex: -1,
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 20,
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },

  backgroundImage2: {
    width: 390,
    height: 480,
    justifyContent: "center",
    alignItems: "center",
  },

  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 450,
    width: 350,
    height: 350,
  },
  iconContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 1,
  },
});

export default MealPlannerScreen;
