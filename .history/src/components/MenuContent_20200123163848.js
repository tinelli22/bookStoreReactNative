import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView, StyleSheet, View, } from 'react-native'
import { Avatar } from 'react-native-elements'
import { DrawerItems } from 'react-navigation-drawer'
import { connect } from 'react-redux'

const MenuContent = (props) => {

    const [drawer, setDrawer] = useState(null)

    return(
       <ScrollView style={{backgroundColor: '#123456'}}>
           <View style={styles.container}>
                <View styles={styles.avatarArea}>
                    <Avatar rounded size={'large'} containerStyle={{marginTop: 20}}/>
                    <Text>{props.user.name}</Text>
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
       fontSize: 18,
       color: '#fff',     
    },
    drawerItens: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        color: '#fff',
        marginTop: 50,
    }
})

const mapStateToProps = ({ user: { user } }, ownProps) => {
    return {
        user: user,
    }
}

export default connect(mapStateToProps, null)(MenuContent)