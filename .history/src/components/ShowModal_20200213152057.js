import React from 'react'
import { View, Modal, Text } from 'react-native'

export default ({ setModal, modal }) => {
    return(
        <View>
            <Modal animated visible={true} animationType={'slide'}  >
                <View>
                    <Text>algo</Text>

                    <Text onPress={() => setModal(!modal)}>Fechar</Text>
                </View>
            </Modal>
        </View>
    )
}