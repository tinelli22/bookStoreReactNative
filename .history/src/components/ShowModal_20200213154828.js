import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'

export default ({ setModal, modal }) => {
    return(
            <Modal animated visible={modal} animationType={'slide'}>
                <View style={styles.container}>
                    <Text>algo</Text>

                    <Text onPress={() => setModal(!modal)}>Fechar</Text>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
})