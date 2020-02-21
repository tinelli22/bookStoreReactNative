import React, { useState } from 'react'
import { View, ScrollView,  } from 'react-native'
import { Avatar, Image } from 'react-native-elements'
import { pickImageLibary } from '../functions/ExpoCamera'

export default ({ images, setImages, qtd }) => {

    const saveImages = async () => {
        let result = await pickImageLibary()
        result && setImages([
            ...images,
            result
        ])
    } 

    return(
        <ScrollView horizontal contentContainerStyle={{ padding: 10, flexDirection: 'row', 
        justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
        {
            images.length > 0 &&
            images.map((el, i) => {
                console.log(el)
                return(
                    <View style={{ padding: 4}}>
                        <Image key={i} style={{ width: 100, height: 100 }} source={{uri: el.uri}} onPress={() => saveImages()}
                        />
                    </View>
                )
            })
        }
        {
            images.length < 4 &&
            <Avatar size={80} onPress={() => saveImages()}
            icon={{ type: 'font-awesome', name: 'image'}} /> 
        }
        </ScrollView>
    )
}