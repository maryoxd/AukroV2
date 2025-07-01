import React from 'react';
import { View, Image, Pressable } from 'react-native';


export default function HomeHeader() {
    return (
        <View style = {{
            flexDirection: 'row',
            alignItems : 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            width: '100%',
        }}>

        <Image
            source={require('@/assets/images/aukrologo.png')}
            style = {{ width: 100, height: 50, resizeMode: 'contain'}}
        />
        </View>
    )
}