import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView, StyleSheet, View, } from 'react-native'
import { Avatar } from 'react-native-elements'
import { DrawerItems } from 'react-navigation-drawer'

export default (props) => {

    const [drawer, setDrawer] = useState(null)

    return(
       <ScrollView style={{backgroundColor: '#123456'}}>
           <View style={styles.container}>
                <View styles={styles.avatarArea}>
                    <Avatar rounded size={'large'} />
                </View>
           </View>
            <View style={styles.drawerItens}>
                <DrawerItems {...props} />
            </View>
       </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    avatarArea: {
       marginTop: 30,        
    },
    drawerItens: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        color: '#fff',
        marginTop: 90,
    }
})