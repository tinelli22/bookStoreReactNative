import React from 'react'
import { Item, Input, Label } from 'native-base'
import { StyleSheet } from 'react-native'

export const InputDefault = ({ label, type, secure}) => {
    return(
        <Item inlineLabel style={styles.container}>
            <Label style={styles.label}>{label}</Label>
            <Input keyboardType={type || 'default'} secureTextEntry={secure || false} />
        </Item>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },
    label: {
        opacity: 40,
        color: '#123456'
    }
})