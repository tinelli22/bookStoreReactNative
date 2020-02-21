import React from 'react'
import { Toast } from 'native-base'

export const messageToast = ( text, type ) => {
    Toast.show({ text, type, position: 'top', duration: 5000})
}