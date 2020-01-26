import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView, StyleSheet, } from 'react-native'

export default ({ content, children }) => {

    const [drawer, setDrawer] = useState(null)

    return(
       <ScrollView style={styles.container}>
           <Text>Algo</Text>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    }
})