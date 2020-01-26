import React from 'react'
import { Item, Input, Label } from 'native-base'

export const InputDefault = ({ label }) => {
    return(
        <Item floatingLabel>
            <Label>{label}</Label>
            <Input />
        </Item>
    )
}