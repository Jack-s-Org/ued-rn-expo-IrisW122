import { View, StyleSheet, Text, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

const SplashScreen2 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          navigation.replace("Splash");
        }}
      >
        <AntDesign name="arrowleft" size={28} color="white" />
      </Pressable>

      <LottieView
        source={require("@/assets/JsonFIle/Comp 2.json")}
        autoPlay
        loop
        style={{ width: 500, height: 500 }}
      />

      <Text style={styles.header}>Discover Amazing Foods</Text>

      <Text style={styles.body}>Satisfy Your Cravings</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.replace("SignIn", { screen: "Home" });
        }}
      >
        <Text style={styles.buttonText}>Get Start</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 40,
    backgroundColor: "#FF9419",
  },

  iconContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 1,
  },

  header: {
    fontSize: 36,
    fontWeight: "Heavy",
    marginVertical: 6,
    marginLeft: 50,
    textAlign: "left",
    alignSelf: "flex-start",
    fontFamily: "FranklinGothicHeavyRegular",
    color: "#FFFFFF",
  },

  body: {
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 50,
    marginBottom: 20,
    color: "#FFFFFF",
  },

  button: {
    backgroundColor: "#FEF5DA",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: "#490339",
    fontSize: 18,
    fontWeight: "Bold",
  },
});

export default SplashScreen2;
