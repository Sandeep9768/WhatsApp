import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CallsList from "../components/StatusList";
import { userData } from "../modal/user";
import CallList from "../components/CallList";
import { useDispatch } from "react-redux";
import { constants } from "../redux/constants";

export default function Calls({ navigation }) {
  const dispatch = useDispatch();

  const data = ["Clear call log", "Setting"];

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      console.log("pressed chat");
      dispatch({ type: constants.CALLMENU, payload: data });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
      {userData.map((user) => (
        <CallList key={user.id} user={user} />
      ))}
    </ScrollView>
  );
}
