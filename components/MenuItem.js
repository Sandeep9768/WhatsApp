import React from "react";
// import {
//   Menu,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
//   MenuProvider,
// } from "react-native-popup-menu";


import { Button, Menu, Divider, Provider } from 'react-native-paper';
import {View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import {Ionicons,Entypo} from '@expo/vector-icons'
export default function MenuItem(props) {
  const menuList = useSelector((state) => state.menuData);
  // console.log("my data", menuList);
  // return (
  //   <MenuProvider customStyles={{ padding: 90 }}>
  //     <Menu>
  //       <MenuTrigger>
         
  //         <Entypo name="dots-three-vertical" size={23} color="white" style={{marginLeft:10}} />
  //       </MenuTrigger>
  //       <MenuOptions customStyles={optionsStyles}>
  //         {menuList
  //           ? menuList.map((menu, index) => (
  //               <MenuOption text={menu} key={index} />
  //             ))
  //           : null}
  //       </MenuOptions>
  //     </Menu>
  //   </MenuProvider>
  // );



  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  return (
    <Provider>
      <View
        style={{
          paddingTop: 0,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Menu
        style={{
        left: -50,
        top: 0,
        zIndex: 2
        }}
          visible={visible}
          onDismiss={closeMenu}
          anchor={
          
          <Entypo name="dots-three-vertical" size={20} color="white" style={{marginLeft:20}} onPress={openMenu}/>}>
          {menuList
            ? menuList.map((menu, index) => (
                <Menu.Item onPress={() => {closeMenu()}} title={menu}  key={index}/>
              ))
            : null}
        </Menu>
      </View>
    </Provider>
  );
}

const optionsStyles = {
  // optionsContainer: {
  //   height: 50,
  //   width: 50,
  //   backgroundColor: "brown",
  // },
  // optionsWrapper: {
  //   backgroundColor: "red",
  //   height: 70,
  //   width: 70,
  // },
  // optionText: {
  //   color: "black",
  // },
};
