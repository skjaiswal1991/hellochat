import React, { Component } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import CupertinoHeaderWithAddButton from "../components/CupertinoHeaderWithAddButton";
import CupertinoButtonDelete from "../components/CupertinoButtonDelete";
import MaterialChipWithImage from "../components/MaterialChipWithImage";
import MaterialChipWithImage1 from "../components/MaterialChipWithImage1";

function Untitled(props) {
  return (
    <View style={styles.container}>
      <CupertinoHeaderWithAddButton
        style={styles.cupertinoHeaderWithAddButton}
      ></CupertinoHeaderWithAddButton>
      <View style={styles.placeholderRow}>
        <TextInput
          placeholder="placeholder"
          style={styles.placeholder}
        ></TextInput>
        <CupertinoButtonDelete
          iconName="ios-trash"
          icon="md-send"
          style={styles.cupertinoButtonDelete}
        ></CupertinoButtonDelete>
      </View>
      <MaterialChipWithImage
        style={styles.materialChipWithImage}
      ></MaterialChipWithImage>
      <MaterialChipWithImage1
        style={styles.materialChipWithImage1}
      ></MaterialChipWithImage1>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  cupertinoHeaderWithAddButton: {
    height: 44,
    width: 375,
    marginTop: 39
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 39,
    width: 287,
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 19,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      height: 0,
      width: 0
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 3
  },
  cupertinoButtonDelete: {
    height: 41,
    width: 47,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(24,100,188,1)",
    marginLeft: 8
  },
  placeholderRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 639,
    marginLeft: 15,
    marginRight: 18
  },
  materialChipWithImage: {
    width: 172,
    height: 32,
    marginTop: -644,
    marginLeft: 15
  },
  materialChipWithImage1: {
    width: 169,
    height: 32,
    marginLeft: 188
  }
});

export default Untitled;
