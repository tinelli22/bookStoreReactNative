import React, { useState, useEffect } from 'react'
import Layout from '../../../components/Layout'
import { connect } from 'react-redux'

function MyBooks({ navigation }) {

    return(
        <Layout>

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