import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ qtd  }) => {

    

    return(
        <ScrollView horizontal style={{ margin: 10}}>
            <Avatar  size={20} />
            <Avatar  size={20} />
            <Avatar  size={20} />
            <Avatar  size={20} />
        </ScrollView>
    )
}