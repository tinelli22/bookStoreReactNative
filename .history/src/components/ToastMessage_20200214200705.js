import React from 'react'
import { Toast } from 'native-base'

export const messageToast = ( text, type ) => {
    Toast.show({ text, type: type || 'success', position: 'top', duration: 5000})
}