import React, { } from 'react'
import { View, Text,  } from 'react-native'
import styles from './Style'
import Layout from '../../../components/Layout'
import { Button, Form, Icon } from 'native-base'
import { InputDefault } from '../../../components/Inputs'
import { Divider } from 'react-native-elements'


function Login({ navigation }) {

    return(
        <Layout>
            <Form style={styles.container}>
                <InputDefault label={'Email'} type={'email-address'} />
                <InputDefault label={'Senha'} secure={true} />
                <Button block info>
                    <Text style={styles.label}>Entrar</Text>
                </Button>
            </Form>

            
            <Text style={styles.text} onPress={() => navigation.navigate('Account')} >Clique aqui para cadastrar.</Text>
            <Text style={styles.text}>Clique aqui para recuperar conta.</Text>
        </Layout>
    )
}

export default Login