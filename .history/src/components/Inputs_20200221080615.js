import React from 'react'
import { Item, Input, Label, Icon } from 'native-base'
import { StyleSheet, Text } from 'react-native'
import { pickImageLibary } from '../functions/ExpoCamera'
import { Image } from 'react-native-elements'
import { TextInputMask } from 'react-native-masked-text'

export const InputDefault = ({ label, type, secure, input, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} placeholder={label} 
            keyboardType={type || 'default'} secureTextEntry={secure || false} />
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

export const InputMask = ({ label, input, type, keyType, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <TextInputMask {...input} keyboardType={keyType || 'default'} type={type} placeholder={label}  />
            
            {
                touched && error && <Text style={styles.textError}>{error}</Text>
            }
        </Item>
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