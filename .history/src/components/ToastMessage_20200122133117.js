import React from 'react'
import { Toast } from 'native-base'

export const messageSuccess = ({ text }) => {
    Toast.show({ text, type: 'success', position: 'top', duration: 5000})
}

export const messageWarning = ({ text }) => {
    Toast.show({ text, type: 'warning', position: 'top', duration: 5000})
}

export const messageError = ({ text }) => {
    Toast.show({ text, type: 'danger', position: 'top', duration: 5000})
}