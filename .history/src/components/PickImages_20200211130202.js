import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ qtd  }) => {

    

    return(
        <ScrollView horizontal contentContainerStyle={{ padding: 10, justifyContent: 'space-between'}}>
            <Avatar  size={100} />
            <Avatar  size={100} />
        </ScrollView>
    )
}