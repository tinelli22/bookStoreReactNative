import React from 'react'
import { Toast } from 'native-base'

export default ({ type, position, text }) => {
    Toast.show({ text, type, position})
}