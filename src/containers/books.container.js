import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteBook} from '../../actions/index';
import {bindActionCreators} from 'redux';
import {Books} from '../components/books/books.component';

const mapStateToProps = (state) => {
    console.log('dddd')
    return {
        books: state.books,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({deleteBook: deleteBook,                           
                              }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books)