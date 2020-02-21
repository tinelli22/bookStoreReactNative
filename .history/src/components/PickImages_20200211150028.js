import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'
import { pickImageLibary } from '../functions/ExpoCamera'

export default ({ images, setImages, qtd }) => {

    console.log(images)

    return(
        <ScrollView horizontal contentContainerStyle={{ padding: 10, flexDirection: 'row', 
        justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
        {
           images.forEach(el => {
               console.log(el)
               return(
                    <Avatar  source={{ uri: el.uri}} size={80} onPress={() => setImages([...images, pickImageLibary() ])}
                    icon={{ type: 'font-awesome', name: 'image'}} />
               )
           })
        }
        
            <Avatar size={80} onPress={ async () => setImages([...images, await pickImageLibary() ])}
            icon={{ type: 'font-awesome', name: 'image'}} /> 
        </ScrollView>
    )
}