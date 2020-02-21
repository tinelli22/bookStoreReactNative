import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'

export default ({ images, setImages  }) => {

    

    return(
        <ScrollView horizontal contentContainerStyle={{ padding: 10, flexDirection: 'row', 
        justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
            <Avatar source={{ uri: images[0].uri}} size={80} 
            icon={{ type: 'font-awesome', name: 'image'}} />
            
            <Avatar source={{ uri: images[1].uri}} size={80} 
            icon={{ type: 'font-awesome', name: 'image'}} />

            <Avatar source={{ uri: images[2].uri}} size={80} 
            icon={{ type: 'font-awesome', name: 'image'}} />

            <Avatar source={{ uri: images[3].uri}} size={80} 
            icon={{ type: 'font-awesome', name: 'image'}} />
        </ScrollView>
    )
}