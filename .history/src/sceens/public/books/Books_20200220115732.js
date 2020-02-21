import React, { useState, useEffect } from 'react'
import { View, } from 'react-native'
import styles from './Style'
import { ListItem } from 'react-native-elements'

function Books({ }) {

    const [books, setBooks] = useState([])

    useEffect(() => {
        setBooks(loadUsersBooks())
    }, [])

    return(
        <View>
            {
                books.map((el, i) => {
                    <ListItem key={i} bottomDivider title={el.title} subtitle={`Vendedor: ${el.user.name}`}
                    />
                })
            }
        </View>
    )
}

export default Books