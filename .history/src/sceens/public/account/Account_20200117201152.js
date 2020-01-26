import React, { } from 'react'
import { View, Text } from 'react-native'
import styles from '../account/Style'
import Layout from '../../../components/Layout'
import { Button, Form } from 'native-base'
import { InputDefault } from '../../../components/Inputs'


function Account({ }) {

    return(
        <Layout>
            <Form>
                <InputDefault label={'Email'} type={'email-address'} />
                <InputDefault label={'Senha'} secure={true} />
                <Button primary><Text>Entrar</Text></Button>
            </Form>
        </Layout>
    )
}

export default Account