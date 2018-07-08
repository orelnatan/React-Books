import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addBookToCart, removeBookFromCart, deleteBook} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './library.component.css';

import Oblonges from '../oblonges/oblonges.component';
import Cart from '../cart/cart.component';


class Library extends Component {

  constructor(props){
    super(props)

  }

  findItemIndexById(list, id){
    return list.map(function(item) {   
                    return item.id; 
                }).indexOf(id);
  }
  
  addBookToCart = (id) => {
    
    let index = this.findItemIndexById(this.props.books, id);
    let book = this.props.books[index];

    this.props.addBookToCart(book);
  }

  removeItem = (id) => {
    
    let index = this.findItemIndexById(this.props.books, id);
    let book = this.props.books[index];

    this.props.removeBookFromCart(book);
  }

  deleteItem = (id) => {

    let index = this.findItemIndexById(this.props.books, id);
    let book = this.props.books[index];

    this.props.deleteBook(book);
  }

  render() {

    return (
        <div className = 'library-main' >
           <div className = 'library-body' >
              <Oblonges items = {this.props.books} 
                        onAddToCart = {this.addBookToCart}
                        onDeleteItem = {this.deleteItem} />

              <Cart items = {this.props.basket} 
                    onRemoveItem = {this.removeItem} />
           </div>
        </div>
    );
  }
}

function mapStateToProps(state){
  return {
    books: state.books,
    basket: state.basket,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({addBookToCart: addBookToCart,
                             removeBookFromCart: removeBookFromCart,
                             deleteBook: deleteBook,                           
                            }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);