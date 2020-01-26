import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { connect } from 'react-redux'

function Header({ }) {

    return(
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',     
    }
})

export default Header