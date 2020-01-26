import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'native-base'

export default ({ state, descriptors, navigation, }) => {
    console.log(descriptors)
    return(
        <View style={styles.container}>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#00d627', 
        justifyContent: 'space-between', 
        padding: 20,
    }
})