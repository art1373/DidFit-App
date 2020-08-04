/* eslint-disable react/prop-types */
import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./SplashScreenStyle";
import { Helpers, Images } from "App/Theme";
import * as Animatable from "react-native-animatable";

export default class SplashScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("MainScreen");
    }, 4000);
  }
  render() {
    return (
      <View style={[Helpers.fillRowCenter, styles.container]}>
        <Animatable.View
          animation="bounceInDown"
          duration={4000}
          style={[Helpers.center, styles.logo]}
        >
          <Image source={Images.logo} resizeMode="cover" />
        </Animatable.View>
      </View>
    );
  }
}
