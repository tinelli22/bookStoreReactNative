import React, { useState, useEffect } from 'react'
import { Text, ScrollView, StyleSheet, View, } from 'react-native'
import { Avatar } from 'react-native-elements'
import { DrawerItems } from 'react-navigation-drawer'
import { connect } from 'react-redux'
import { pickImageLibary } from '../functions/ExpoCamera'
import { loadUserAction } from '../store/actions/user'
import { saveUserService } from '../services/users'

const MenuContent = ({ user, onUpdateUser, ...rest }) => {

    useEffect(() => {
        user.photo && setImage(user.photo)
    }, [])

    const [image, setImage] = useState({})

    const pickImage =  async () => {
        const img = await pickImageLibary()
        if(img) {
            setImage(img)
            user.photo = img
            saveUserService(user.uid, user).then(_ => {
                onUpdateUser(user)
            }).catch(err => console.error(err))
        }
    }

    return(
       <ScrollView style={{backgroundColor: '#123456'}}>
            <View style={styles.container}>
                <Avatar rounded size={110} containerStyle={{margin: 20}} onPress={() => pickImage()}
                icon={{ type: 'font-awesome', name: 'image'}} source={{ uri: image.uri}} />
                <Text style={styles.label}>{user.name}</Text>
                <Text style={styles.text}>{user.email}</Text> 
            </View>
            <View style={styles.drawerItens}>
                <DrawerItems {...rest} activeBackgroundColor={'#0e2a47'} labelStyle={{color: '#fff'}} />
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
       onUpdateUser: user => dispatch(loadUserAction(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MenuContent)