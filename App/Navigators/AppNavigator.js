/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
// Registrations
import SplashScreen from "App/Containers/Splash/SplashScreen";
import SigninMainScreen from "App/Containers/Signin/SigninScreen";
import SigninEmailScreen from "App/Containers/SigninEmail/SigninEmailScreen";
import HomeScreen from "App/Containers/Home/HomeScreen";

const MainStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: SigninMainScreen,
    EmailSignin: SigninEmailScreen,
    HomeScreen: HomeScreen,
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none",
  }
);
const BottomTab = createBottomTabNavigator(
  {
    Home: HomeScreen,
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
  }
);
const AppNavigator = createSwitchNavigator({
  Main: MainStack,
  BottomNav: BottomTab,
});

export default createAppContainer(AppNavigator);
