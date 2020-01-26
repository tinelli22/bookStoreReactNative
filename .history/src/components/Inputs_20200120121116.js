import React from 'react'
import { Item, Input, Label } from 'native-base'
import { StyleSheet, Text } from 'react-native'
import { TextInputMask } from 'react-masked-text'

export const InputDefault = ({ label, type, secure, input, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} placeholder={label} keyboardType={type || 'default'} secureTextEntry={secure || false} />
            {
                touched && error && <Text style={styles.textError}>{error}</Text>
            }
        </Item>
    )
}

export const InputPhone = ({ label, input, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <TextInputMask {...input} type={'cel-phone'} placeholder={label} />
            {
                touched && error && <Text style={styles.textError}>{error}</Text>
            }
        </Item>
    )
}


const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    textError: {
        color: '#fc0303',
    }
})