import React from 'react'
import * as ImagePicker from 'expo-image-picker'

export const pickImage = async fnc => {

    let permission = await ImagePicker.getCameraPermissionsAsync()
    if(permission.granted) {
        let result = await ImagePicker.launchImageLibraryAsync({
            base64,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result)
        return fnc(result)
    } else {
        return null
    }
}