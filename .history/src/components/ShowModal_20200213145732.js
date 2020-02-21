import React from 'react'
import { View, Modal, Text } from 'react-native'

export default ({ setModal, modal }) => {
    return(
        <Modal animated visible={modal} >
            <Text>algo</Text>
        </Modal>
    )
}