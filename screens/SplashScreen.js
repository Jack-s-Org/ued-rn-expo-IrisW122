import { Image, Pressable, View, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Pressable
        onPress={() => {
          navigation.replace("Splash2");
        }}
      >
        <View>
          <Image
            source={require("@/assets/Images/Page1.jpg")}
            style={styles.image}
          ></Image>
        </View>
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
});

export default SplashScreen;
