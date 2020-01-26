import React from 'react'
import { Item, Input, Label } from 'native-base'
import { StyleSheet } from 'react-native'

export const InputDefault = ({ label, type, secure}) => {
    return(
        <Item style={styles.container}>
            <Input placeholder={label} keyboardType={type || 'default'} secureTextEntry={secure || false} />
        </Item>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    label: {
        opacity: 10,
        color: '#123456'
    }
})