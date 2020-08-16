import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import IconBadge from "./IconBadge";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function StatusList(props) {
  const { name, time } = props.user;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.userLogo}
            source={require("../assets/user.png")}
          />
        </View>
        <View style={styles.chatContainer}>
          <View style={styles.userView}>
            <Text style={{ fontSize: 17, fontWeight: "800" }}>{name}</Text>
            <Text style={{ color: "green", textTransform: "uppercase" }}>
              {time}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    borderBottomColor: "black",

    borderBottomWidth: 1,
  },
  chatContainer: {
    flex: 1,
    flexDirection: "column",
    paddingVertical: 15,
    paddingHorizontal: 10,
  },

  userLogo: {
    width: 60,
    height: 77,
  },
});
