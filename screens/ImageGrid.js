import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import Carasoul from "../components/Carasoul";
import Card from "../components/Card";
import NewImageGrid from "../components/NewImageGrid";

export default function ImageGrid(props) {
  return (
    <ScrollView style={styles.container}>
      {/* <Carasoul /> */}
      <NewImageGrid></NewImageGrid>
      <Card />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 10,
  },
});
