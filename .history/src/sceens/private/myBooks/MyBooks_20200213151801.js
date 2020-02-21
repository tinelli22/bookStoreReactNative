import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { View, Text } from 'react-native'
import { ListItem, Image, Avatar } from 'react-native-elements'
import { getBooksAction, loadBookAction, loadImagesBookAction } from '../../../store/actions/book'
import { getBooksService } from '../../../services/book'
import ShowModal from '../../../components/ShowModal'

function MyBooks({ navigation, books, onLoadMyBooks, user, onLoadBook, onLoadImagesBook }) {

    const [modal, setModal] = useState(false)

    useEffect(() => {
       getBooksService(user.uid).then(resp => {
           const booksMapped = resp.docs.map(b => {
                return { uid: b.id, ...b.data() }
           })
           onLoadMyBooks(booksMapped)
       }).catch(err => console.error(err))
    }, [])

    const editBook = values => {
        onLoadBook(values)
        onLoadImagesBook(values.images)
        navigation.navigate('EditBook')
    }

    const handleModal = () => {
        setModal(!modal)
        return(
            <View>
                <ShowModal modal={modal} setModal={setModal} />
            </View>
        )
    }

    return(
        <Layout>
            <Header navigation={navigation} options={[{name: 'Novo', fnc: () => navigation.navigate('Book') }]} />
            {
                books.length > 0 &&
                books.map((el, i) => {
                    
                    return(
                        <ListItem key={i} bottomDivider
                        leftElement={<Avatar source={{ uri: el.images[0].uri}} width={70} height={70} /> } 
                        title={el.title} titleStyle={{fontSize: 18, fontWeight: 'bold'}}
                        rightElement={<View>
                            <Text style={{ paddingBottom: 15}} onPress={() => editBook(el)}>Editar</Text>
                            <Text style={{ color: 'red', fontWeight: 'bold'}} 
                            onPress={() => handleModal()} >Remover</Text>
                        </View>}
                        subtitle={`Autor: ${el.author}`} />
                    )
                })
            }
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadMyBooks: books => dispatch(getBooksAction(books)),
        onLoadBook: values => dispatch(loadBookAction(values)),
        onLoadImagesBook: images => dispatch(loadImagesBookAction(images))
    }
}

const mapStateToProps = ({ book, user }, ownProps) => {
    return {
        books: book.myBooks,
        user: user.user,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)