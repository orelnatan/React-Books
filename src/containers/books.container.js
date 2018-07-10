import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteBook} from '../../actions/index';
import {bindActionCreators} from 'redux';
import {Books} from '../components/books/books.component';

export class BooksContainer extends React.Component{

    constructor(state){
        super(state)
        console.log('dddd')
    }

}

function mapStateToProps(state){
    return {
        books: state.books,
    }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({
  
                                deleteBook: deleteBook,                           
                                }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);