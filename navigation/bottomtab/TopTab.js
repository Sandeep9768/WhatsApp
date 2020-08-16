export const TopTab = (props) => {
  console.log("Top", props);
  return (
    <UpTab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "black",
        style: { backgroundColor: "#128C7E" },
        labelStyle: { fontSize: 16 },
      }}
    >
      <UpTab.Screen name="Chat" component={Chat} />
      <UpTab.Screen name="Status" component={Status} />
      <UpTab.Screen name="Calls" component={Calls} />
    </UpTab.Navigator>
  );
};
