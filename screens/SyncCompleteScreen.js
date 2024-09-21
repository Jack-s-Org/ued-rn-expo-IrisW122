import { Image, Pressable, View, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const SyncComplete = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          navigation.replace("Sync2");
        }}
      >
        <AntDesign name="arrowleft" size={28} color="#490339" />
      </Pressable>

      <View>
        <Image
          source={require("@/assets/Images/SyncCompletePic.png")}
          style={styles.image}
        ></Image>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.replace("Main", { screen: "Home" });
        }}
      >
        <Text style={styles.buttonText}>Next</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },

  iconContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 1,
  },

  button: {
    position: "absolute",
    backgroundColor: "#FF9419",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    bottom: 100,
    marginLeft: 44,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "Bold",
  },
});

export default SyncComplete;
