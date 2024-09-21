import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import HomeScreen from "./HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import MealPlanner from "./MealPlannerScreen";

const Tab = createBottomTabNavigator();

const EmptyScreen = () => null;

const MainScreens = () => {
  return (
    <SafeAreaView style={{ height: "100%" }}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "#FF9419",
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
            tabBarLabel: "Home",
          }}
        />

        <Tab.Screen
          name="MealPlannerScreen"
          component={MealPlanner}
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="calendar" size={size} color={color} />
            ),
            tabBarLabel: "Meal PLanner",
          }}
        />

        {/* Non-clickable icon */}
        <Tab.Screen
          name="EmptyScreen"
          component={EmptyScreen} // This screen doesn't do anything
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="note-text-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: "Notes",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
        />

        <Tab.Screen
          name="EmptyScreen2"
          component={EmptyScreen} // This screen doesn't do anything
          options={{
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="message1" size={size} color={color} />
            ),
            tabBarLabel: "Message",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
        />

        <Tab.Screen
          name="EmptyScreen3"
          component={EmptyScreen} // This screen doesn't do anything
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="account-circle" size={size} color={color} />
            ),
            tabBarLabel: "Profile",
          }}
          listeners={{
            tabPress: (e) => {
              e.preventDefault();
            },
          }}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};

export default MainScreens;
