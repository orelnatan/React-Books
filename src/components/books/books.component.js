import React, { Component } from 'react';
import {connect} from 'react-redux';
import {deleteBook} from '../../actions/index';
import {addBookToCart} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './books.component.css';

import {List} from '../list/list.component';

class Books extends Component {

  addToCart = (id) => {
    let book = this.props.books.find(item => item.id == id);
    this.props.addBookToCart(book);
  }
  
  deleteItem = (id) => {
    let book = this.props.books.find(item => item.id == id);
    this.props.deleteBook(book);
  }

  render() {
    return (
        <div className = 'books-main' >
            <div className = 'books-body' >
                <List items = {this.props.books} 
                      onAddToCart = {this.addToCart}
                      onDeleteItem = {this.deleteItem} />
            </div>
        </div>
    );
  }
}

function mapStateToProps(state){
    return {
        books: state.books,
    }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({deleteBook: deleteBook,
                               addBookToCart: addBookToCart,                          
                              }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Books);


