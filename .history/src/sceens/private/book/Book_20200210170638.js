import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { reduxForm, Field } from 'redux-form'
import { InputDefault, InputNumber } from '../../../components/Inputs'
import { validate } from './Validation'
import { Avatar } from 'react-native-elements'
import { pickImage } from '../../../functions/ExpoCamera'

function Book({ navigation }) {

    const [image, setImage] = useState({})

    return(
        <Layout>
            <Button block light onPress={() => navigation.navigate('MyBooks')}>
                <Text>Voltar</Text>
            </Button>
            <Avatar source={image.base64} size={120} containerStyle={{margin: 10, padding: 6}} showEditButton onPress={() => pickImage(setImage) }/>
            <Field name={'title'} label={'titulo'} component={InputDefault} />
            <Field name={'author'} label={'autor'} component={InputDefault} />
            <Field name={'year'} label={'ano'} max={4} component={InputNumber} />
            <Field name={'description'} label={'descricao'} component={InputDefault} />
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