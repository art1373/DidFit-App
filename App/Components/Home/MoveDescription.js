import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors, Fonts, Helpers, Images } from "App/Theme";

import PropTypes from "prop-types";

const MoveDescription = ({ moveName, difficulty, iterations, duration }) => {
  const diff = Array.from(Array(difficulty).keys("diff"));

  return (
    <View style={styles.container}>
      <Text style={styles.moveName}>{moveName}</Text>
      <View style={styles.headingRow}>
        <View>
          <Text style={styles.description}>Difficulty</Text>
          <View style={{ ...Helpers.rowCenter, marginTop: 10 }}>
            {diff.map((dif) => (
              <Image resizeMode="contain" source={Images.starIcon} />
            ))}
          </View>
        </View>
        <View>
          <Text style={styles.description}>Iterations</Text>
          <Text style={styles.answer}>{iterations} Sätze</Text>
        </View>
        <View>
          <Text style={styles.description}>Duration</Text>
          <Text style={styles.answer}>{duration} Minuten</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    ...Helpers.colMain,
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  moveName: {
    ...Fonts.h3,
    color: Colors.white,
    marginTop: 50,
    padding: 20,
  },
  description: {
    ...Fonts.normal,
    color: Colors.descGray,
    padding: -5,
  },
  answer: {
    ...Fonts.input,
    color: Colors.white,
    fontWeight: "bold",
    marginTop: 10,
  },
  headingRow: {
    ...Helpers.rowMain,
    justifyContent: "space-between",
    width: "90%",
    paddingHorizontal: 20,
  },
});
MoveDescription.propTypes = {
  moveName: PropTypes.string.isRequired,
  difficulty: PropTypes.array.isRequired,
  iterations: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
};

export default MoveDescription;
