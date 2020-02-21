import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { ListItem } from 'react-native-elements'

function MyBooks({ navigation, books }) {

    return(
        <Layout>
            <Header navigation={navigation} options={[{name: 'Novo', fnc: () => navigation.navigate('Book') }]} />
            {
                
                books.map((el, i) => {
                    return(
                        <ListItem key={i} leftAvatar={el.images[0].uri} title={el.title} 
                        subtitle={`Autor: ${el.author}`} />
                    )
                })
            }
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

const mapStateToProps = ({ book }, ownProps) => {
    return {
        books: book.myBooks
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)