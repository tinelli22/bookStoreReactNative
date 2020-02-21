import React from 'react'
import { View, Modal, Text } from 'react-native'

export default ({ setModal, modal }) => {
    return(
        <View style={{ width: 50, height: 50}}>
            <Modal animated visible={modal} animationType={'slide'}>
                <View>
                    <Text>algo</Text>

                    <Text onPress={() => setModal(!modal)}>Fechar</Text>
                </View>
            </Modal>
        </View>
    )
}