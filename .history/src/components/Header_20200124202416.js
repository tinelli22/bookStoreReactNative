import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'
import { Icon, Button } from 'native-base'

function Header({ navigation, options }) {

    return(
        <View style={styles.container}>
            <View style={styles.options}>
                <Icon type={'Ionicons'} name={'menu'} color={'#fff'} onPress={() => navigation.toggleDrawer()} />
                <Text style={styles.title}>Menu</Text>
            </View>
            <View style={styles.options}>
                {
                    options && options.map((el, i) => {
                        return(
                            <Button primary><Text>{el}</Text></Button>
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#123456',
        padding: 20,
        color: '#fff'     
    },
    title: {
        fontSize: 20,
        color: '#fff',
        marginLeft: 10,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',    
    },
})

export default Header