import React, { useState } from 'react'
import { Drawer } from 'native-base'
import { Text, ScrollView, StyleSheet, View, } from 'react-native'
import { Avatar } from 'react-native-elements'
import { DrawerItems } from 'react-navigation-drawer'
import { connect } from 'react-redux'
import { pickImageLibary } from '../functions/ExpoCamera'

const MenuContent = (props) => {

    const [image, setImage] = useState(null)

    const pickImage = () => {
        const img = pickImageLibary()
        img && setImage(img)
    }

    return(
       <ScrollView style={{backgroundColor: '#123456'}}>
            <View style={styles.container}>
                <Avatar rounded size={'large'} containerStyle={{margin: 20}} onPress={() => pickImage()}
                icon={{ type: 'font-awesome', name: 'image'}} source={{ uri: image.url}} />
                <Text style={styles.label}>{props.user.name}</Text>
                <Text style={styles.text}>{props.user.email}</Text> 
            </View>
            <View style={styles.drawerItens}>
                <DrawerItems {...props} activeBackgroundColor={'#0e2a47'} labelStyle={{color: '#fff'}} />
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
    label: {
        fontSize: 18,
        color: '#fff',     
        marginTop: 2,
    },
    text: {
        fontSize: 12,
        color: '#fff',     
        marginTop: 2,
    },
    drawerItens: {
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '100%',
        color: '#fff',
        marginTop: 30,
    },
})

const mapStateToProps = ({ user: { user } }, ownProps) => {
    return {
        user: user,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       onUpdateUser: user => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContent)