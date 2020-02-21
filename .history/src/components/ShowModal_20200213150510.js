import React from 'react'
import { View, Modal, Text } from 'react-native'

export default ({ setModal, modal }) => {
    return(
        <View>
            <Modal animated visible={modal} animationType={'slide'} >
                <Text>algo</Text>

                <Text onPress={() => setModal(!modal)}>Fechar</Text>
            </Modal>
        </View>
    )
}