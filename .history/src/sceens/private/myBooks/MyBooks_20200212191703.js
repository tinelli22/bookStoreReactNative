import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { ListItem, Image } from 'react-native-elements'
import { getBooksAction } from '../../../store/actions/book'
import { getBooksService } from '../../../services/book'

function MyBooks({ navigation, books, onLoadMyBooks, user }) {

    useEffect(() => {
       getBooksService(user.uid).then(resp => {
           const booksMapped = resp.docs.map(b => b.data())
           onLoadMyBooks(booksMapped)
       }).catch(err => console.error(err))
    }, [])

    return(
        <Layout>
            <Header navigation={navigation} options={[{name: 'Novo', fnc: () => navigation.navigate('Book') }]} />
            {
                books.length > 0 &&
                books.map((el, i) => {
                    return(
                        <ListItem key={i} leftElement={<Image source={{ uri: el.images[0].uri}} /> } title={el.title} 
                        subtitle={`Autor: ${el.author}`} />
                    )
                })
            }
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadMyBooks: books => dispatch(getBooksAction(books))
    }
}

const mapStateToProps = ({ book, user }, ownProps) => {
    return {
        books: book.myBooks,
        user: user.user,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)