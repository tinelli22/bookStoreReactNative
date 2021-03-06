import React from 'react'
import * as ImagePicker from 'expo-image-picker'

export const pickImage = async (fnc) => {

    
        let result = await ImagePicker.launchImageLibraryAsync({
            base64: true,
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })

        console.log(result)
        fnc(result)
    
}