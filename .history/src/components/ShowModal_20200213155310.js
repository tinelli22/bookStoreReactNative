import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'

export default ({ setModal, modal }) => {
    return(
            <Modal animated visible={modal} animationType={'slide'}>
                <View style={styles.container}>
                    <Text style={styles.title}>Você tem certeza?</Text>

                    <Button danger><Text>Sim, Remover</Text></Button>
                    <Text onPress={() => setModal(!modal)}>Fechar</Text>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})