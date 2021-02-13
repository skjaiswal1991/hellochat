import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

function ReceiveElement(props) {
  return (
    <View style={[styles.container]}>
      <Image
        source={require("../../src/assets/images/cardImage1.png")}
        style={styles.leftImage}
      ></Image>
      <Text style={styles.chipText}>{props.msg}</Text>
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
    width: 172,
    marginLeft: 2,
    marginTop:2,
  },
  leftImage: {
    height: 32,
    width: 32,
    backgroundColor: "#CCC",
    borderRadius: 16
  },
  chipText: {
    fontSize: 13,
    color: "rgba(0,0,0,0.87)",
    paddingLeft: 8,
    paddingRight: 12
  },
  ReceiveElement: {
      width: 172,
      height: 32,
      marginTop: -644,
      marginLeft: 15
    }
});

export default ReceiveElement;
