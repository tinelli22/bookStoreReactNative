import React from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import { reduxForm, Field } from 'redux-form'
import Header from '../../../components/Header'
import { InputDefault, InputNumber } from '../../../components/Inputs'

function Info({ user, navigation}) {


    return(
        <Layout>
            <Header navigation={navigation} />
            <Field name={'name'} label={'Nome'} component={InputDefault} />
            <Field name={'phone'} label={'Celular'} component={InputNumber} />
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

const mapStateToProps = ({ user: { user }}, ownProps) => {
    return {
        user: user,
    }
}

Info = reduxForm({ form: 'info', })(Info)

export default connect(mapStateToProps, mapDispatchToProps)(Info)