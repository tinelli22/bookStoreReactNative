import React from 'react'
import * as ImagePicker from 'expo-image-picker'

export const pickImage = async fnc => {

    let permission = await ImagePicker.getCameraPermissionsAsync()
    if(permission.granted) {
        let result = await ImagePicker.launchImageLibraryAsync()
        return fnc(result)
    } else {
        return null
    }
}