import React from 'react'
import { View, StyleSheet } from 'react-native'

export default ({ state, }) => {
    return(
        <View style={styles.container}>
            <Icon name={'bars'} type={'FontAwesome'} color={'#fff'} />
            <Text>algo</Text>
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