import React from 'react'
import { View } from 'react-native'
import { Container, Header, Title, Content, Footer, 
    FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

export default ({ children, title, icon }) => {
    return(
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                    { icon &&  <Icon name='menu' /> }
                    </Button>
                </Left>
                <Body>
                    <Title>{title}</Title>
                </Body>
                <Right />
            </Header>

            <Content>
                { children }
            </Content>
        </Container>
    )
}