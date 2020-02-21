import React from 'react'
import { View, Modal, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'


export const showModal = ({ setModal, modal, title, text }) => {


    return(
            <Modal animated visible={modal} animationType={'slide'} transparent>
                <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                    <Button title={text} type={'solid'} buttonStyle={{ backgroundColor: 'red'}} />
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
        borderBottomColor: 'yellow',
        borderBottomWidth: 2,
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

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(null,)(ShowModal)