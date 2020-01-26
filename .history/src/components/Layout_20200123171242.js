import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base'
import { authref } from '../config/firebaseConfig'
import Header from './Header'

export default ({ children, }) => {
    return(
        <Container style={styles.container}>
            { authref.onAuthStateChanged(user => {
                if(user) {
                    return <Header />
                }})
            }
            <Content >
                { 
                    children 
                }
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    }
})