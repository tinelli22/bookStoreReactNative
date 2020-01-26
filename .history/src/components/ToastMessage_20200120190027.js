import React from 'react'
import { Toast } from 'native-base'

export const messageSuccess = ({ text }) => {
    Toast.show({ text, type: 'success', position: 'bottom'})
}

export const messageWarning = ({ text }) => {
    Toast.show({ text, type: 'warning', position: 'bottom'})
}

export const messageError = ({ text }) => {
    Toast.show({ text, type: 'danger', position: 'bottom'})
}