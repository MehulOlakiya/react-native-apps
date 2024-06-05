import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import RecentExpenseScreen from "./screens/RecentExpenseScreen";
import AllExpenseScreen from "./screens/AllExpenseScreen";
import IconButton from "./components/UI/IconButton";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";
import ExpenseContextProvider from "./store/expenses-context";

export default function App() {
  const BottomTab = createBottomTabNavigator();
  const Stack = createNativeStackNavigator();

  function ExpenseOverview() {
    return (
      <BottomTab.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: { backgroundColor: "#1b1717" },
          headerTintColor: "#cccccc",
          tabBarStyle: { backgroundColor: "#1b1717",marginBottom:10 },
          tabBarActiveTintColor: "#b83f3f",
          tabBarInactiveTintColor: "#cccccc",
          headerRight: ({ tintColor }) => {
            return (
              <IconButton
                icon="add"
                color={tintColor}
                size={24}
                onPress={() => {
                  navigation.navigate("ManageExpense");
                }}
              />
            );
          },
        })}
      >
        <BottomTab.Screen
          name="RecentExpense"
          component={RecentExpenseScreen}
          options={{
            title: "Recent Expense",
            tabBarLabel: "Recent",
            tabBarIcon: ({ color, size }) => {
              return <Ionicons name="hourglass" size={size} color={color} />;
            },
          }}
        />
        <BottomTab.Screen
          name="AllExpenses"
          component={AllExpenseScreen}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <Ionicons name="calendar" size={size} color={color} />;
            },
          }}
        />
      </BottomTab.Navigator>
    );
  }

  return (
    <>
      <StatusBar style="light" />
      {/* <View style={styles.container}> */}
      <ExpenseContextProvider>
      <NavigationContainer >
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#1b1717" },
            headerTintColor: "#cccccc",
          }}
        >
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpense"
            component={ManageExpenseScreen}
            options={{
              presentation: "modal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </ExpenseContextProvider>
      {/* </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom:10
  },
});
