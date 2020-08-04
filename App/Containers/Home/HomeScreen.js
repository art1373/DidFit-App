import React from "react";
import { View, Text, ImageBackground, ScrollView } from "react-native";
import styles from "./HomeScreenStyles";
import { Colors, Images } from "App/Theme";
import { text } from "../../utils/mockData";

import BackChevron from "../../Components/shared/BackChevron";
import MoveDescription from "../../Components/Home/MoveDescription";
import Button from "../../Components/Home/ButtonHome";
import Section from "../../Components/Home/Section";

function HomeScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.headingImg}
        source={Images.HomeBackground}
      >
        <BackChevron
          thick
          customText="Back"
          goBack={() => navigation.goBack()}
        />
        <MoveDescription
          moveName="Child's pose"
          difficulty={3}
          iterations={"10"}
          duration={"15"}
        />
        <View style={styles.btnWrap}>
          <Button
            title="Play Video"
            img={Images.playIcon}
            color={Colors.lightBlue}
          />
          <Button
            title="Mark as done"
            img={Images.checkIcon}
            color={Colors.grass}
          />
        </View>
      </ImageBackground>
      <Section heading="Description" data={text} />
      <Section heading="Attachments" img={Images.attachment} />
    </ScrollView>
  );
}

export default HomeScreen;
