import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontFamily, FontSize } from "./GlobalStyles";

const Avatar = () => {
  return (
    <View style={styles.ellipseParent}>
      <Image
        style={styles.frameChild}
        contentFit="cover"
        source={require("../assets/avatar.jpg")}
      />
      <View style={styles.johnDecorteParent}>
        <Text style={styles.johnDecorte}>John Decorte</Text>
        <Text style={styles.level1077}>Level 10.77</Text>
        <View style={styles.frameItem} />
        <Text style={[styles.text, styles.textTypo]} numberOfLines={1}>
          644 ₳
        </Text>
        <Text style={[styles.text1, styles.textTypo]} numberOfLines={1}>
          5©
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    fontFamily: FontFamily.roundedMplus1c,
    top: 6,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  frameChild: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
  },
  johnDecorte: {
    top: "0%",
    fontSize: 15,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roundedMplus1c,
    left: "0%",
    position: "absolute",
  },
  level1077: {
    top: "58.33%",
    fontSize: FontSize.size_3xs,
    textAlign: "left",
    color: Color.colorWhite,
    fontFamily: FontFamily.roundedMplus1c,
    left: "0%",
    position: "absolute",
  },
  frameItem: {
    height: "5.56%",
    width: "64.42%",
    top: "80.56%",
    right: "-0.61%",
    bottom: "13.89%",
    left: "36.2%",
    borderStyle: "solid",
    borderColor: "#efefeb",
    borderTopWidth: 2,
    position: "absolute",
  },
  text: {
    left: 134,
  },
  text1: {
    left: 107,
  },
  johnDecorteParent: {
    width: 163,
    height: 36,
    marginLeft: 20,
  },
  ellipseParent: {
    width: 233,
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
});

export default Avatar;
