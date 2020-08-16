import React, { useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";

const DATA = [
  {
    id: 1,
    image: "../assets/one.jpg",
  },
  {
    id: 2,
    image: "../assets/one.jpg",
  },
  {
    id: 3,
    image: "../assets/one.jpg",
  },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72f",
  //     image: "../assets/one.jpg",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72d",
  //     image: "../assets/one.jpg",
  //   },
];

const Carasoul = () => {
  const [toggleImage, setToggleImage] = useState("");

  const renderItem = ({ item }) => {
    return (
      <View style={styles.list}>
        <TouchableOpacity onPress={() => handlePress(item.id)}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/one.jpg")}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const handlePress = (id) => {
    const image = DATA.find((item) => {
      return item.id === id;
    });
    setToggleImage(image.image);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePrev}>
        <Image
          source={require("../assets/one.jpg")}
          style={styles.imagePreview}
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        numColumns={3}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagePrev: {
    height: 200,
    width: "100%",
    backgroundColor: "yellow",
  },
  imagePreview: {
    height: 300,
    width: "100%",
  },
  list: {
    width: "33.33%",
    borderWidth: 1,
    borderRightColor: "white",
  },
  imageStyle: {
    height: 150,
    width: "100%",
  },
});

export default Carasoul;
