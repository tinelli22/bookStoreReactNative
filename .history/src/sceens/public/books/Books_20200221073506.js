import React, { useState, useEffect } from 'react'
import { View, } from 'react-native'
import styles from './Style'
import { ListItem } from 'react-native-elements'
import { loadUsersBooksService } from '../../../services/users'
import { connect } from 'react-redux'

function Books({ }) {

    const [books, setBooks] = useState([])

    useEffect(() => {
        
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

const mapStateToProps = ({ }, ownProps) => {
   return {

   }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)