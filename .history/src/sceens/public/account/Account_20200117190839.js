import React, { } from 'react'
import { View, } from 'react-native'
import styles from '../account/Style'
import Layout from '../../../components/Layout'
import { Form } from 'native-base'
import { InputDefault } from '../../../components/Inputs'

function Account({ }) {

    return(
        <Layout>
            <Form>
                <InputDefault label={'Email'} />
                <InputDefault label={'Senha'} />
            </Form>
        </Layout>
    )
}

export default Account