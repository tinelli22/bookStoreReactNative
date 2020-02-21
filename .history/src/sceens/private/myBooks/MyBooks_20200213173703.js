import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { View, Text } from 'react-native'
import { ListItem, Image, Avatar } from 'react-native-elements'
import { getBooksAction, loadBookAction, loadImagesBookAction } from '../../../store/actions/book'
import { getBooksService, removeBookService } from '../../../services/book'
import Modals from '../../../components/Modals'
import { messageError, messageSuccess } from '../../../components/ToastMessage'

function MyBooks({ navigation, books, onLoadMyBooks, user, onLoadBook, onLoadImagesBook, onRemoveBook }) {

    const [modal, setModal] = useState(false)
    //console.log(user)
    useEffect(() => {
       getBooksService(user.uid).then(resp => {
           const booksMapped = resp.docs.map(b => {
                return { id: b.id, ...b.data() }
           })
           onLoadMyBooks(booksMapped)
       }).catch(err => console.error(err))
    }, [])

    const editBook = values => {
        onLoadBook(values)
        onLoadImagesBook(values.images)
        navigation.navigate('EditBook')
    }

    const removeBook = id => {
        removeBookService(user.uid, id).then(_ => {
            messageSuccess({ text: 'Removido com sucesso'})
            onRemoveBook(id)
        }).catch(_ => messageError({ text: 'Erro ao remover livro'}))
    }

    

    return(
        <Layout>
            <Header navigation={navigation} options={[{name: 'Novo', fnc: () => navigation.navigate('Book') }]} />
            {
                books.length > 0 &&
                books.map((el, i) => {
                    //console.log(el)
                    return(
                        <>
                        <ListItem key={i} bottomDivider
                        leftElement={<Avatar source={{ uri: el.images[0].uri}} width={70} height={70} /> } 
                        title={el.title} titleStyle={{fontSize: 18, fontWeight: 'bold'}}
                        rightElement={<View>
                            <Text style={{ paddingBottom: 15}} onPress={() => editBook(el)}>Editar</Text>
                            <Text style={{ color: 'red', fontWeight: 'bold'}} 
                            onPress={() => setModal(!modal)} >Remover</Text>
                        </View>}
                        subtitle={`Autor: ${el.author}`} />
                        {
                          modal && <Modals modal={modal} setModal={setModal} title={'Tem certeza?'} 
                          text={'Sim, remover'} fnc={() => removeBook(el.id)} />
                        }
                        </>
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
        onLoadImagesBook: images => dispatch(loadImagesBookAction(images)),
        onRemoveBook: id => dispatch(removeBookAction(id))
    }
}

const mapStateToProps = ({ book, user }, ownProps) => {
    return {
        books: book.myBooks,
        user: user.user,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)