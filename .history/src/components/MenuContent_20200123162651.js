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
                    <Avatar rounded size={'large'} />
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
        display: 'flex',
        backgroundColor: '#00d627',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarArea: {
        borderBottomColor: '#fff',
        borderBottomWidth: 12,
        
    },
    drawerItens: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 10,
        width: '100%',
        color: '#fff',
        backgroundColor: "#123456"
    }
})