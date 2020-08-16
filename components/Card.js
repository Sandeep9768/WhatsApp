import React from "react";
import { View } from "react-native";
import { Text, StyleSheet, Button, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Card() {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={{ fontWeight: "700" }}>1</Text>
          <Text>People Reacted</Text>
        </View>
        <View>
          <Text style={{ fontWeight: "700" }}>1</Text>
          <Text>Engagements</Text>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Button title="Boost Post" onPress={() => alert("Working")} />
        </View>
      </View>

      <View style={styles.comments}>
        <View style={{ flexDirection: "row" }}>
          <EvilIcons name="like" size={22} color="black" />
          <Text>Like</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <FontAwesome5 name="comment" size={17} color="black" />
          <Text style={{ paddingLeft: 5 }}>Comments</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons
            name="share-outline"
            size={24}
            color="black"
          />
          <Text>Share</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons name="circle" size={24} color="grey" />
          <Octicons name="arrow-down" size={24} color="grey" />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          paddingVertical: 10,
          marginHorizontal: 10,
        }}
      >
        <View>
          <MaterialCommunityIcons name="circle" size={40} color="grey" />
        </View>
        <View style={styles.input}>
          <TextInput editable maxLength={150} placeholder="Write a comment" />
          <View style={{ flexDirection: "row" }}>
            <FontAwesome
              name="smile-o"
              size={20}
              color="black"
              style={{ paddingTop: 3 }}
            />
            <EvilIcons
              name="camera"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
            <MaterialCommunityIcons
              name="gif"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
            <EvilIcons
              name="camera"
              size={24}
              color="black"
              style={{ paddingLeft: 10 }}
            />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopColor: "grey",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: 10,
  },
  comments: {
    flex: 1,
    marginHorizontal: 10,
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 20,
    borderColor: "grey",
    borderWidth: 1,
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
