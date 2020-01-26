import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text } from 'react-native'

export default ({ content, children }) => {

    const [drawer, setDrawer] = useState(null)

    return(
        <Drawer ref={ref => setDrawer(ref)} onClose={() => drawer._root.close()} 
        onOpen={() => drawer._root.open()} content={<Text>algo</Text>}>
            { children }
        </Drawer>
    )
}