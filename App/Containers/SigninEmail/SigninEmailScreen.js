import React from "react";
import {
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import { StretchyScrollView } from "react-native-stretchy";
import styles from "./SigninEmailStyles";
import { Colors, Images } from "App/Theme";

import BackChevron from "../../Components/shared/BackChevron";

function SigninEmailScreen(props) {
  const { navigation } = props;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <>
        <SafeAreaView style={{ backgroundColor: Colors.black }} />
        <View style={styles.container}>
          <View style={styles.backWrap}>
            <BackChevron goBack={() => navigation.goBack()} />
          </View>
          <View style={styles.screenInner}>
            <Text>jshfks</Text>
          </View>
        </View>
      </>
    </TouchableWithoutFeedback>
  );
}

export default SigninEmailScreen;
