import React from 'react'
import { View, Modal, Text } from 'react-native'

export default ({ setModal, modal }) => {
    return(
        <View>
            <Modal animated visible={true} animationType={'slide'} >
                <Text>algo</Text>

                <Text>Fechar</Text>
            </Modal>
        </View>
    )
}