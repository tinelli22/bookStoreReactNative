import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'
import { Button } from 'native-base'

export default ({ setModal, modal }) => {
    return(
            <Modal animated visible={modal} animationType={'slide'}>
                <View style={styles.container}>
                    <Text>algo</Text>

                    <Button danger block><Text>Sim, Remover</Text></Button>
                    <Text onPress={() => setModal(!modal)}>Fechar</Text>
                </View>
            </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },

})