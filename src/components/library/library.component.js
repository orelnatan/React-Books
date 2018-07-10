import React, { Component } from 'react';
import './library.component.css';

import Books from '../books/books.component';
import Cart from '../cart/cart.component';


class Library extends Component {

  constructor(props){
    super(props)

  }

  render() {

    return (
        <div className = 'library-main' >
           <div className = 'library-body' >
              <Books  />
              <Cart />
           </div>
        </div>
    );
  }
}


export default Library;