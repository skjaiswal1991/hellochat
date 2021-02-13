import React, { Component } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

function SenderElement(props) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.chipText}>{props.msg}</Text>
      <Image
        source={require("../../src/assets/images/cardImage1.png")}
        style={styles.leftImage}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "rgb(230,230,230)",
    borderRadius: 50,
    flexDirection: "row",
    width:169,
    marginLeft: 188
  },
  chipText: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)",
    paddingLeft: 8,
    paddingRight: 12
  },
  leftImage: {
    height: 32,
    width: 32,
    backgroundColor: "#CCC",
    borderRadius: 16
  },
  SenderElement: {
    width: 169,
    height: 32,
    marginLeft: 188
  }
});

export default SenderElement;
