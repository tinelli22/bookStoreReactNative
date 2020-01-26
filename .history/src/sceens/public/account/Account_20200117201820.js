import React, { } from 'react'
import { View, Text } from 'react-native'
import styles from '../account/Style'
import Layout from '../../../components/Layout'
import { Button, Form, Icon } from 'native-base'
import { InputDefault } from '../../../components/Inputs'


function Account({ }) {

    return(
        <Layout>
            <Form style={styles.container}>
                <InputDefault label={'Email'} type={'email-address'} />
                <InputDefault label={'Senha'} secure={true} />
                <Button block info>
                    <Text style={styles.label}>Entrar</Text>
                </Button>
            </Form>
        </Layout>
    )
}

export default Account