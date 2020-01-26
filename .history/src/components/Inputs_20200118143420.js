import React from 'react'
import { Item, Input, Label } from 'native-base'
import { StyleSheet, Text } from 'react-native'

export const InputDefault = ({ label, type, secure, input, meta: { touched, error }}) => {
    return(
        <Item style={styles.container}>
            <Input {...input} placeholder={label} keyboardType={type || 'default'} secureTextEntry={secure || false} />
            {
                touched && error && <Text>{error}</Text>
            }
        </Item>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 20,
    },

})