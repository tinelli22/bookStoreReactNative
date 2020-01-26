import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

function Header({ }) {

    return(
        <View style={styles.container}>
            <Icon  name={'bars'} color={'#fff'} />
            <Text style={styles.title}>Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#123456',
        padding: 20,     
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 10,
    }
})

export default Header