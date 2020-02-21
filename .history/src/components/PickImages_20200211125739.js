import React, { useState } from 'react'
import { View, ScrollView, } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ qtd  }) => {

    

    return(
        <ScrollView horizontal>
            <Avatar  size={'small'} />
            <Avatar  size={'small'} />
            <Avatar  size={'small'} />
            <Avatar  size={'small'} />
        </ScrollView>
    )
}