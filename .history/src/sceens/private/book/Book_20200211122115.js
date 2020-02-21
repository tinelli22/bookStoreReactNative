import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { InputDefault } from '../../../components/Inputs'
import { validate } from './Validation'
import { pickImageLibary } from '../../../functions/ExpoCamera'
import { Avatar } from 'react-native-elements'


function Book({ navigation, valid, submitting, handleSubmit }) {

    const [image, setImage] = useState(null)


    return(
        <Layout>

            {
                image ? <Avatar source={{ uri: image.uri }} size={150}  /> : <Avatar title={'IMG'} size={150} 
                 onPress={() => pickImageLibary(setImage)} />
            }
           
            <Field name={'title'} label={'titulo'} component={InputDefault} />
            <Field name={'author'} label={'autor'} component={InputDefault} />
            <Field name={'description'} label={'descricao'} component={InputDefault} />

            <Button block info disabled={(!valid && image !== null) || submitting}>
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