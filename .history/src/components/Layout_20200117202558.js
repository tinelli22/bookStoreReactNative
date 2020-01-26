import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Container, Header, Title, Content, Footer, 
    FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

export default ({ children, }) => {
    return(
        <Container style={styles.container}>
            <Content >
                { children }
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
       margin: 20,
       flexDirection: 'column',
       justifyContent: 'space-between',
       alignItems: 'center' 
    }
})