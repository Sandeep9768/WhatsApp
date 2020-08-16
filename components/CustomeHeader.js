import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

// export default function customeHeader(props) {

//     return (
//         <View>
//             <Text></Text>
//         </View>
//     )
// }

const CustomeHeader = ({ title, subtitle }) => (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
const styles = StyleSheet.create({
    header: {
      backgroundColor: '#fc0',
      flex: 1,
      alignSelf: 'stretch',
    },
    title: {
      fontSize: 20,
      color: 'blue',
      fontWeight: 'bold',
    },
    subtitle: {
      fontSize: 16,
      color: 'purple',
      fontWeight: 'bold',
    },
  });

  export default CustomeHeader
