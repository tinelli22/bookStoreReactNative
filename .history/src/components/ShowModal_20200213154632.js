import React from 'react'
import { View, Modal, Text } from 'react-native'

export default ({ setModal, modal }) => {
    return(
            <Modal animated visible={modal} animationType={'slide'}>
                <View style={{ flex: 0.5, }}>
                    <Text>algo</Text>

                    <Text onPress={() => setModal(!modal)}>Fechar</Text>
                </View>
            </Modal>
    )
}