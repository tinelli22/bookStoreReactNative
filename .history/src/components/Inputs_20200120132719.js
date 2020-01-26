import React from 'react'
import { Item, Input, Label } from 'native-base'
import { StyleSheet, Text } from 'react-native'


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

export const InputNumber = ({ label, input, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} keyboardType={'phone-pad'} type={'number'} placeholder={label} maxLength={11} />
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