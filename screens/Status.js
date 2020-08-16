import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import StatusList from "../components/StatusList";
import { userData } from "../modal/user";
import { useDispatch } from "react-redux";
import { constants } from "../redux/constants";

export default function Status({ navigation }) {
  const dispatch = useDispatch();

  const data = ["Status Privacy", "Setting"];

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      console.log("pressed chat");
      dispatch({ type: constants.STATUSMENU, payload: data });
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <ScrollView>
      {userData.map((user) => (
        <StatusList key={user.id} user={user} />
      ))}
    </ScrollView>
  );
}
