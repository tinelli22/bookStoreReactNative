import React from 'react'
import { Toast } from 'native-base'

export const messageSuccess = ({ text }) => {
    Toast.show({ text, type: 'success', position: 'bottom', duration: 6000})
}

export const messageWarning = ({ text }) => {
    Toast.show({ text, type: 'warning', position: 'bottom', duration: 6000})
}

export const messageError = ({ text }) => {
    Toast.show({ text, type: 'danger', position: 'bottom', duration: 6000})
}