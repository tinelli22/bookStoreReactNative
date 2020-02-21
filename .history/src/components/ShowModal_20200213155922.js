import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'

export default ({ setModal, modal }) => {
    return(
            <Modal animated visible={modal} animationType={'slide'} transparent>
                <View style={styles.container}>
                    <Text style={styles.title}>Você tem certeza?</Text>

                    <Button textStyle={{ color: '#fff'}} style={styles.button} danger><Text>Sim, Remover</Text></Button>
                    <Text onPress={() => setModal(!modal)}>Fechar</Text>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#123456',
        marginTop: 120,
    },
    title: {
        paddingTop: 30,
        paddingBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
    },
    button: {
        padding: 20,
    }
})