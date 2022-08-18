import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {colors} from '../utils/colours';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: "#D3D3D3",
      borderWidth: 2,
    },
    text: { color: "#D3D3D3", fontSize: size/3 },
  });
