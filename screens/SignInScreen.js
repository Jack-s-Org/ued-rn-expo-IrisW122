import { Text, Pressable, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";

const SignInScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.iconContainer}
        onPress={() => {
          navigation.replace("Splash2");
        }}
      >
        <AntDesign name="arrowleft" size={28} color="#490339" />
      </Pressable>

      <Image
        source={require("@/assets/Images/WelcomeBackPic.png")}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.email}>Email</Text>

      <View style={styles.emailBox}></View>

      <Text style={styles.password}>Password</Text>

      <View style={styles.passwordBox}></View>

      <Pressable
        style={styles.button}
        onPress={() => {
          navigation.replace("Sync", { screen: "Home" });
        }}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#FEF5DA",
  },

  image: {
    width: 300,
    height: 300,
    marginBottom: 0,
  },

  email: {
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 50,
    marginBottom: 2,
    color: "#777777",
  },

  emailBox: {
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginTop: 2,
    justifyContent: "center",
    marginBottom: 40,
  },

  password: {
    fontSize: 16,
    textAlign: "left",
    alignSelf: "flex-start",
    marginLeft: 50,
    marginBottom: 2,
    color: "#777777",
  },

  passwordBox: {
    width: "80%",
    height: 60,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#ffffff",
    marginTop: 2,
    justifyContent: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#FF9419",
    width: 300,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    marginTop: 20,
  },

  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "Bold",
  },

  iconContainer: {
    position: "absolute",
    top: 60,
    left: 20,
    zIndex: 1,
  },
});

export default SignInScreen;
