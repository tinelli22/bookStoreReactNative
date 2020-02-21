import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { InputDefault, InputMask } from '../../../components/Inputs'
import { validate } from './Validation'
import PickImages from '../../../components/PickImages'
import { saveBookService } from '../../../services/book'
import { saveBookAction } from '../../../store/actions/book'
import { messageToast } from '../../../components/ToastMessage'


function Book({ navigation, valid, submitting, handleSubmit, onSaveBook, reset, user, isEdit, imagesReducer }) {

    useEffect(() => {
       isEdit && setImages(imagesReducer)
    }, [])
    
    const [images, setImages] = useState([])

    const saveBook = values => {
        const data = {
            ...values,
            images,
        }

        saveBookService(user.uid, data).then(resp => {
            const book = {
                id: resp.id,
                ...data
            }

            onSaveBook(book)
            if(!isEdit) {
                reset()
                setImages([])
            }

            messageToast(`Livro ${isEdit ? 'salvo' : 'cadastrado'} com sucesso`)
        })
    }

    return(
        <Layout>
            
            <Field name={'title'} label={'titulo'} component={InputDefault} />
            <Field name={'author'} label={'autor'} component={InputDefault} />
            <Field name={'price'} label={'Valor'} component={InputMask} type={'noney'} 
            keyType={'number-pad'} />
            <Field name={'description'} label={'descricao'} component={InputDefault} />
            <PickImages images={images} setImages={setImages} />


            <Button block info disabled={!valid || submitting} onPress={handleSubmit(saveBook)}>
            <Text style={{ color: '#fff', fontWeight: 'bold'}}>{isEdit ? 'Salvar' : 'Cadastrar'}</Text>
            </Button>
            <Button block light onPress={() => navigation.navigate('MyBooks')}>
                <Text>Voltar</Text>
            </Button>
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onSaveBook: book => dispatch(saveBookAction(book)),
    }
}

const mapStateToProps = ({ book, user }, ownProps) => {
    return {
        books: book.books,
        user: user.user,
        imagesReducer: book.images,
    }
}

Book = reduxForm({ form: 'book', validate})(Book)

export default connect(mapStateToProps, mapDispatchToProps)(Book)