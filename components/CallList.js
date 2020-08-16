import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Zocial } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function CallList(props) {
  const { name, time, voice, video } = props.user;
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
              {voice ? (
                <MaterialIcons name="call-received" size={14} color="black" />
              ) : null}{" "}
              {time}
            </Text>
          </View>
          <View style={styles.callView}>
            <Text style={{ color: "green", textTransform: "uppercase" }}>
              {voice ? (
                <Zocial name="call" size={24} color="black" />
              ) : (
                <Foundation name="video" size={24} color="black" />
              )}
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
    flexDirection: "row",
    paddingVertical: 15,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
  callView: {
    justifyContent: "center",
    alignItems: "center",
  },
  userLogo: {
    width: 60,
    height: 77,
  },
});
