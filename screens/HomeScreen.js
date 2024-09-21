import {
  ImageBackground,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const SplashScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require("@/assets/Images/HomeScreenPic.png")}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.extraSpace} />
        </ImageBackground>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
  },

  backgroundImage: {
    width: 390,
    height: 1510,
    justifyContent: "flex-start",
  },

  extraSpace: {
    height: 1000,
  },
});

export default SplashScreen;
