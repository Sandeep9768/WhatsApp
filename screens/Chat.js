import React from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import UserList from "../components/UserList";
import { userData } from "../modal/user";
import { useDispatch } from "react-redux";
import { constants } from "../redux/constants";

export default function Chat({ navigation }) {
  const dispatch = useDispatch();

  const data = ["New Group", "New Broadcast", "Web"];

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("tabPress", (e) => {
      console.log("pressed chat");
      dispatch({ type: constants.CHATMENU, payload: data });
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView>
      {userData.map((user) => (
        <UserList key={user.id} user={user} />
      ))}
    </ScrollView>
  );
}
