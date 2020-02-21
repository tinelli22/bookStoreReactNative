import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'

export default ({ setModal, modal }) => {
    return(
            <Modal animated visible={modal} animationType={'slide'} transparent>
                <View style={styles.container}>
                    <Text style={styles.title}>Você tem certeza?</Text>

                    <Button style={styles.button} danger><Text style={{color: '#fff'}}>Sim, Remover</Text></Button>
                    <Text style={styles.label} onPress={() => setModal(!modal)}>Fechar</Text>
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
        borderColor: 'yellow',
        borderWidth: 2,
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
    },
    label: {
        fontSize: 18,
        color: '#fff',
        marginTop: 40,
        marginBottom: 10,
    }
})