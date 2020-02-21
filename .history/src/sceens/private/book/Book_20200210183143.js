import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { InputDefault, InputNumber, InputAvatar } from '../../../components/Inputs'
import { validate } from './Validation'
import { pickImageLibary } from '../../../functions/ExpoCamera'
import { Image } from 'react-native-elements'


function Book({ navigation, valid, submitting, handleSubmit }) {

    const [image, setImage] = useState(null)


    return(
        <Layout>
            <Button block light onPress={() => navigation.navigate('MyBooks')}>
                <Text>Voltar</Text>
            </Button>

            {
                image && <Image source={{ uri: image.uri }} />
            }

            <Button onPress={() => pickImageLibary(setImage)}>
                <Text>{'Selecionar foto'}</Text>
            </Button>

            <Field name={'title'} label={'titulo'} component={InputDefault} />
            <Field name={'author'} label={'autor'} component={InputDefault} />
            <Field name={'description'} label={'descricao'} component={InputDefault} />

            <Button block info disabled={(!valid && image) || submitting}>
                <Text style={{ color: '#fff', fontWeight: 'bold'}}>Salvar</Text>
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