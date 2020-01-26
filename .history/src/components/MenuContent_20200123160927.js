import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView, StyleSheet, View, } from 'react-native'
import { Avatar } from 'react-native-elements'

export default ({ content, children }) => {

    const [drawer, setDrawer] = useState(null)

    return(
       <ScrollView>
           <View style={styles.container}>
                <View styles={styles.avatarArea}>
                    <Avatar rounded />
                </View>
           </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00d627',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    avatarArea: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
    }
})