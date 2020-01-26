import React, { useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Header from '../../../components/Header'
import { InputDefault, InputNumber } from '../../../components/Inputs'
import { loadForm } from '../../../store/actions/user'
import { validate } from './Validation'

function Info({ user, navigation, onLoadForm}) {

    useEffect(() => {
        onLoadForm({ name: user.name, phone: null, password: user.password })
    }, [])

    return(
        <Layout>
            <Header navigation={navigation} />
            <Field name={'name'} label={'Nome'} component={InputDefault} />
            <Field name={'phone'} label={'Celular'} component={InputNumber} />
            <Field name={'password'} label={'Senha'} secure={true} component={InputDefault} />
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onLoadForm: values => dispatch(loadForm(values))
    }
}

const mapStateToProps = ({ user: { user }}, ownProps) => {
    return {
        user: user,
    }
}

Info = reduxForm({ form: 'info', validate })(Info)

export default connect(mapStateToProps, mapDispatchToProps)(Info)