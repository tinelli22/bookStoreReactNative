import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ qtd  }) => {

    

    return(
        <ScrollView horizontal style={{ padding: 30}}>
            <Avatar  size={20} />
            
        </ScrollView>
    )
}