import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView, StyleSheet, View, } from 'react-native'
import { Avatar } from 'react-native-elements'
import { DrawerItems } from 'react-navigation-drawer'

export default (props) => {

    const [drawer, setDrawer] = useState(null)

    return(
       <ScrollView>
           <View style={styles.container}>
                <View styles={styles.avatarArea}>
                    <Avatar rounded size={'xlarge'} />
                </View>
                <View style={styles.drawerItens}>
                    <DrawerItems {...props} />
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
        alignItems: 'center',
    },
    avatarArea: {
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        padding: 40,
    },
    drawerItens: {
        flexDirection: 'row',
        alignItems: 'stretch'
    }
})