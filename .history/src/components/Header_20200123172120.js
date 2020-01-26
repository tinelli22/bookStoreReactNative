import React from 'react'
import { View, StyleSheet, } from 'react-native'
import { connect } from 'react-redux'
import { Icon } from 'native-base'

function Header({ }) {

    return(
        <View style={styles.container}>
            <Icon type={'FontAwesome'} name={'bars'} />
            <Text style={styles.title}>Menu</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 20,     
    },
    title: {
        fontSize: 20,
        color: '#fff',
    }
})

export default Header