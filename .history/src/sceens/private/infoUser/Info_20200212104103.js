import React, { useEffect, useState } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Header from '../../../components/Header'
import { InputDefault, InputNumber, InputPassword } from '../../../components/Inputs'
import { loadForm } from '../../../store/actions/user'
import { validate } from './Validation'
import { Button } from 'native-base'
import { Text } from 'react-native'
import { saveUserService } from '../../../services/users'

function Info({ user, navigation, onLoadForm, valid, handleSubmit, submitting }) {

    const [showPassword, setShowPassword] = useState(true)

    useEffect(() => {
        onLoadForm({ name: user.name, phone: user.phone || null, password: user.password })
    }, [])

    const submit = values => {
        const newsData = { ...user, ...values }
        saveUserService(user.uid, newsData)
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
    }
}

const mapStateToProps = ({ user: { user }}, ownProps) => {
    return {
        user: user,
    }
}

Info = reduxForm({ form: 'info', validate })(Info)

export default connect(mapStateToProps, mapDispatchToProps)(Info)