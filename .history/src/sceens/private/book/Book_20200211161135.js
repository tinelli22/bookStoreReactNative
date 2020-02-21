import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { InputDefault } from '../../../components/Inputs'
import { validate } from './Validation'
import PickImages from '../../../components/PickImages'


function Book({ navigation, valid, submitting, handleSubmit }) {

    const [images, setImages] = useState([])

    return(
        <Layout>
            
            <Field name={'title'} label={'titulo'} component={InputDefault} />
            <Field name={'author'} label={'autor'} component={InputDefault} />
            <Field name={'description'} label={'descricao'} component={InputDefault} />
            <PickImages images={images} setImages={setImages} />


            <Button block info disabled={!valid || submitting}>
                <Text style={{ color: '#fff', fontWeight: 'bold'}}>Salvar</Text>
            </Button>
            <Button block light onPress={() => navigation.navigate('MyBooks')}>
                <Text>Voltar</Text>
            </Button>
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

const mapStateToProps = ({ book }, ownProps) => {
    return {
        books: book.books
    }
}

Book = reduxForm({ form: 'book', validate})(Book)

export default connect(mapStateToProps, mapDispatchToProps)(Book)