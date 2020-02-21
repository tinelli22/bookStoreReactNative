import React from 'react'
import * as ImagePicker from 'expo-image-picker'

export const pickImage = async () => {

    let permission = await ImagePicker.getCameraPermissionsAsync()
    return permission.granted ? await ImagePicker.launchImageLibraryAsync() : null
}