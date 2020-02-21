import React from 'react'
import { Item, Input, Label, Icon } from 'native-base'
import { StyleSheet, Text } from 'react-native'
import { pickImageLibary } from '../functions/ExpoCamera'
import { Avatar } from 'react-native-elements'

export const InputDefault = ({ label, type, secure, input, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} placeholder={label} keyboardType={type || 'default'} secureTextEntry={secure || false} />
            {
                secure && <Icon name={'eye'} />
            }
            {
                touched && error && <Text style={styles.textError}>{error}</Text>
            }
        </Item>
    )
}

export const InputPassword = ({ label, secure, input, onShow ,meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} placeholder={label} secureTextEntry={secure || false} />
            {
                <Icon name={secure ? 'eye' : 'md-eye-off'} onPress={() => onShow(!secure)} />
            }
            {
                touched && error && <Text style={styles.textError}>{error}</Text>
            }
        </Item>
    )
}

export const InputNumber = ({ label, input, max ,meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} keyboardType={'phone-pad'} placeholder={label} maxLength={max || 11} />
            
            {
                touched && error && <Text style={styles.textError}>{error}</Text>
            }
        </Item>
    )
}

export const InputAvatar = ({ image , setImage, input, meta: { touched, error }}) => {
    return(
        <Avatar source={{ uri: image.uri}} size={150} containerStyle={{margin: 10, padding: 6}} 
        onPress={() => pickImageLibary(setImage) } showEditButton 
        >
            {
                touched && error && <Text style={styles.textError}>{error}</Text>
            }
        </Avatar>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textError: {
        color: '#fc0303',
    }
})