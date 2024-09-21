import { StyleSheet, View, Text, Image } from "react-native";
import PagerView from "react-native-pager-view";

export default function PageView() {
  return (
    <View style={styles.container}>
      <PagerView style={styles.container} initialPage={0}>
        <View style={styles.page} key="1">
          <Image source={require("@/assets/Images/advertising3.png")} />
          <Text>First page</Text>
          <Text>Swipe ➡️</Text>
        </View>
        <View style={styles.page} key="2">
          <Image source={require("@/assets/Images/advertising2.png")} />
          <Text>Second page</Text>
        </View>
        <View style={styles.page} key="3">
          <Image source={require("@/assets/Images/advertising3.png")} />
          <Text>Third page</Text>
        </View>
      </PagerView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: 10,
    height: 10,
    marginBottom: 20,
  },
});
