import { Image, View, StyleSheet, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const SyncScreen2 = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          navigation.replace("Sync3");
        }}
      >
        <AntDesign name="arrowleft" size={28} color="white" />
      </Pressable>

      <View>
        <Image
          source={require("@/assets/Images/SyncScreenPic.png")}
          style={styles.image}
        ></Image>
      </View>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.replace("Sync3", { screen: "Home" });
        }}
      >
        <Text style={styles.buttonText}>Get Start</Text>
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
    backgroundColor: "#FEF5DA",
    width: 300,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    bottom: 100,
    marginLeft: 44,
  },

  buttonText: {
    color: "#490339",
    fontSize: 18,
    fontWeight: "Bold",
  },
});

export default SyncScreen2;
