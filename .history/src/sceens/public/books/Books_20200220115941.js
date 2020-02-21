import React, { useState, useEffect } from 'react'
import { View, } from 'react-native'
import styles from './Style'
import { ListItem } from 'react-native-elements'
import { loadUsersBooksService } from '../../../services/users'

function Books({ }) {

    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(loadUsersBooksService())
    }, [])

    return(
        <View>
            {
                books.map((el, i) => {
                    console.log(el),
                    <ListItem key={i} bottomDivider title={el.title} subtitle={`Vendedor: ${el.user.name}`}
                    />
                })
            }
        </View>
    )
}

export default Books