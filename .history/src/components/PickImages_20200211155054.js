import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar, Icon, Image } from 'react-native-elements'
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
            images.forEach(el => {
               console.log(el)
               return(
                    <Image  source={{ uri: el.uri}} size={80} onPress={() => saveImages()}
                    icon={{ type: 'font-awesome', name: 'image'}} />
               )
           })
        }
        {
            images.length < 5 &&
            <Avatar size={80} onPress={() => saveImages()}
            icon={{ type: 'font-awesome', name: 'image'}} /> 
        }
        </ScrollView>
    )
}