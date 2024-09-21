import SignInScreen from "./SignInScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import SplashScreen from "./SplashScreen";
import SplashScreen2 from "./SplashScreen2";
import SyncScreen from "./SyncScreen";
import SyncScreen2 from "./SyncScreen2";
import SyncScreen3 from "./SyncScreen3";
import SyncCompleteScreen from "./SyncCompleteScreen";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Splash2" component={SplashScreen2} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Sync" component={SyncScreen} />
        <Stack.Screen name="Sync2" component={SyncScreen2} />
        <Stack.Screen name="Sync3" component={SyncScreen3} />
        <Stack.Screen name="SyncComplete" component={SyncCompleteScreen} />
        <Stack.Screen name="Main" component={MainScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
