import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Fonts, Colors, Helpers } from "App/Theme";
import PropTypes from "prop-types";

const Section = ({ heading, data, img }) => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionHeading}>{heading}</Text>
      <Text style={styles.bodyText}>{data}</Text>
      <View style={styles.imgWrap}>
        <Image style={styles.img} resizeMode="contain" source={img} />
        <Image style={styles.img} resizeMode="contain" source={img} />
        <Image style={styles.img} resizeMode="contain" source={img} />
        <Image style={styles.img} resizeMode="contain" source={img} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    padding: 20,
  },
  sectionHeading: {
    ...Fonts.h4,
    color: Colors.mildBlack,
  },
  bodyText: {
    ...Fonts.input,
    color: Colors.normalGray,
    textAlign: "left",
  },
  imgWrap: {
    ...Helpers.rowCenter,
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  img: {
    marginBottom: 10,
  },
});
Section.propTypes = {
  heading: PropTypes.string,
  data: PropTypes.string,
};

export default Section;
