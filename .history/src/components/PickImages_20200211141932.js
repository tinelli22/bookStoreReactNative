import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'

export default ({ images, setImages }) => {

    

    return(
        <ScrollView horizontal contentContainerStyle={{ padding: 10, flexDirection: 'row', 
        justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
        {
           images.forEach(el => {
               return(
                    <Avatar source={{ uri: el.uri}} size={80} onPress={() => pickImageLibary(setImages)}
                    icon={{ type: 'font-awesome', name: 'image'}} />
               )
           })
        }    
        </ScrollView>
    )
}