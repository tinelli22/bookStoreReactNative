import React from 'react'
import { View, Modal, Text } from 'react-native'

export default ({ setModal, modal }) => {
    return(
        <View>
            <Modal animated visible={modal} >
                <Text>algo</Text>

                <Text>Fechar</Text>
            </Modal>
        </View>
    )
}