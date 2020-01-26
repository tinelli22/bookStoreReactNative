import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView } from 'react-native'

export default ({ content, children }) => {

    const [drawer, setDrawer] = useState(null)

    return(
       <ScrollView>
           <Text>Algo</Text>
       </ScrollView>
    )
}