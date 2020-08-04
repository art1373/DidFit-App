/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

// Registrations
import SplashScreen from "App/Containers/Splash/SplashScreen";
import SigninMainScreen from "App/Containers/Signin/SigninScreen";
import SigninEmailScreen from "App/Containers/SigninEmail/SigninEmailScreen";

const MainStack = createStackNavigator(
  {
    SplashScreen: SplashScreen,
    MainScreen: {
      screen: SigninMainScreen,
    },
    EmailSignin: SigninEmailScreen,
  },
  {
    initialRouteName: "SplashScreen",
    headerMode: "none",
  }
);

export default createAppContainer(MainStack);
