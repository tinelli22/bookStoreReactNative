import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { Icon } from 'native-base'

export default ({ state, descriptors, navigation, }) => {
    return(
        <View style={styles.container}>
            {
                state.routes.map((route, index) => {
                    const { options: { tabBarLabel } } = descriptors[route.key]
                    return(
                        <>             
                            <Icon name={'bars'} type={'FontAwesome'} color={'#fff'} />
                            <Text>{tabBarLabel}</Text>
                        </>    
                    )
                })
            }
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