import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar, Icon } from 'react-native-elements'

export default ({ qtd  }) => {

    

    return(
        <ScrollView horizontal contentContainerStyle={{ padding: 10, flexDirection: 'row', 
        justifyContent: 'space-between', alignItems: 'center', flex: 1}}>
            <Avatar  size={80} icon={{ type: 'font-awesome', name: 'image'}} />
            <Avatar  size={80} />
            <Avatar  size={80} />
            <Avatar  size={80} />
        </ScrollView>
    )
}