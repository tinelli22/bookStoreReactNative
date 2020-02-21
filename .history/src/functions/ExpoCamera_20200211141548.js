import React from 'react'
import * as ImagePicker from 'expo-image-picker'

export const pickImageLibary = async () => {

    
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            
            quality: 1
        })

        console.log(result)

        !result.cancelled && fnc([].push(result))
    
}