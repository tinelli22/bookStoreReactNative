import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Footer, 
    FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { authref } from '../config/firebaseConfig'
import MenuContent from './MenuContent'

export default ({ children, }) => {
    return(
        <Container style={styles.container}>
            <Content >
                { 
                     authref.onAuthStateChanged(user => {
                        if(user) {
                            <MenuContent>
                                { children }
                            </MenuContent>
                        } else {
                            children
                        }
                     })
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