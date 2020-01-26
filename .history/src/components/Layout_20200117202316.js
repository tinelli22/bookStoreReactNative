import React from 'react'
import { View } from 'react-native'
import { Container, Header, Title, Content, Footer, 
    FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

export default ({ children, }) => {
    return(
        <Container>
            <Content style={{ margin: 20}}>
                { children }
            </Content>
        </Container>
    )
}