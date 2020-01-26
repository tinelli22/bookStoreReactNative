import React from 'react'
import { Item, Input, Label } from 'native-base'
import { StyleSheet } from 'react-native'

export const InputDefault = ({ label }) => {
    return(
        <Item floatingLabel>
            <Label style={styles.label}>{label}</Label>
            <Input />
        </Item>
    )
}

const styles = StyleSheet.create({
    label: {
        opacity: 80,
    }
})