import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function IconBadge(props) {
  console.log("icon", props);
  return (
    <View style={styles.iconView}>
      <Text style={{ color: "white" }}>{props.notify}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  iconView: {
    backgroundColor: "green",
    height: 20,
    width: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
});
