import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Header from '../../../components/Header'
import { InputDefault, InputNumber, InputPassword } from '../../../components/Inputs'
import { loadForm, loadUser } from '../../../store/actions/user'
import { validate } from './Validation'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { saveUserService } from '../../../services/users'
import { messageSuccess, messageError } from '../../../components/ToastMessage'

function Info({ user, navigation, onLoadForm, valid, onSave, handleSubmit, submitting }) {

    const [showPassword, setShowPassword] = useState(true)

    useEffect(() => {
        onLoadForm({ name: user.name, phone: user.phone || null, password: user.password })
    }, [])

    const submit = values => {
        const newsData = { ...user, ...values }
        saveUserService(newsData.uid, newsData).then(_ => {
            onSave(newsData)
            messageSuccess({ text: 'Dados salvo com sucesso.'})
        }).catch(_ => messageError({ text: 'Erro ao salvar.'}))
    }

    return(
        <Layout>
            <Header navigation={navigation} />
            <Field name={'name'} label={'Nome'} component={InputDefault} />
            <Field name={'phone'} label={'Celular'} component={InputNumber} />
            <Field name={'password'} label={'Senha'} secure={showPassword} onShow={setShowPassword} 
            component={InputPassword} />
            <Button block info disabled={!valid || submitting} onPress={handleSubmit(submit)}>
                <Text style={{ color: '#fff', fontWeight: 'bold'}}>Salvar</Text>
            </Button>
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadForm: values => dispatch(loadForm(values)),
        onSave: values => dispatch(loadUser(values))
    }
}

const mapStateToProps = ({ user: { user }}, ownProps) => {
    return {
        user: user,
    }
}

Info = reduxForm({ form: 'info', validate })(Info)

export default connect(mapStateToProps, mapDispatchToProps)(Info)