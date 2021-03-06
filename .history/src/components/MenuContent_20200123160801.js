import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView, StyleSheet, View, } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ content, children }) => {

    const [drawer, setDrawer] = useState(null)

    return(
       <ScrollView style={styles.container}>
           <View styles={styles.avatarArea}>
               <Avatar rounded />
           </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00d627',
    },
    avatarArea: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    }
})