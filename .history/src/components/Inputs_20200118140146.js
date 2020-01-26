import React from 'react'
import { Item, Input, Label } from 'native-base'
import { StyleSheet } from 'react-native'

export const InputDefault = ({ label, type, secure, input, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} placeholder={label} keyboardType={type || 'default'} secureTextEntry={secure || false} />
            {
                touched && error && <span>{error}</span>
            }
        </Item>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    }
})