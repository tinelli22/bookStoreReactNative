import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'
import Header from '../../../components/Header'

function MyBooks({ navigation }) {

    return(
        <Layout>
            <Header navigation={navigation} />
        </Layout>
    )
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
}

const mapStateToProps = ({ book }, ownProps) => {
    return {
        books: book.books
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyBooks)