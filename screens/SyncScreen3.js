import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const SyncScreen3 = ({ navigation }) => {
  const handleAnimationFinish = () => {
    navigation.replace("SyncComplete");
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require("@/assets/JsonFIle/Comp 4.json")}
        autoPlay
        loop={false}
        onAnimationFinish={handleAnimationFinish}
        style={styles.animation}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF9419",
  },

  animation: {
    width: "100%", // Full width
    height: "100%", // Full height
  },
});

export default SyncScreen3;
