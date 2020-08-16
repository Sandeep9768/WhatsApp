import React from 'react'
import { View, Text } from 'react-native'
import FbImageLibrary from 'react-fb-image-grid'
export default function NewImageGrid() {
    return (
        <View>
            <FbImageLibrary images={[
                 "https://facebook.github.io/react-native/docs/assets/favicon.png",
                 "https://facebook.github.io/react-native/docs/assets/favicon.png",
                 "https://facebook.github.io/react-native/docs/assets/favicon.png",
                 "https://facebook.github.io/react-native/docs/assets/favicon.png",
                 "https://facebook.github.io/react-native/docs/assets/favicon.png",
                 "https://facebook.github.io/react-native/docs/assets/favicon.png"
            ]}
            countFrom={4}
            />
        </View>
    )
}
