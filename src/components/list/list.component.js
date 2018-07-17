
import React, { Component } from 'react';
import './list.component.css';

export class List extends Component {
  
  actions = [
    {
     label: 'Add to cart', 
     id: 432, 
     image: require('../../assets/images/add-to-cart.png'), 
     action: (id) => {this.addToCart(id)}
    }, {
      label: 'Send to trash', 
      id: 321, 
      image: require('../../assets/images/trash.png'), 
      action: (id) => {this.deleteItem(id)}
    }, {
      label: 'Add as favorite', 
      id: 654, 
      image: require('../../assets/images/favorite.png'), 
      action: (id) => {}
    }, 
  ];


  addToCart(id){
    this.props.onAddToCart(id);
  }

  deleteItem(id){
    this.props.onDeleteItem(id);
  }


  render() {

    var list = this.props.items;
    var actions = this.actions;

    return (
        <div className = 'list-main' >
            <div className = 'list-body' >
                <div className = 'list-list' >  
                  {list.map((book) =>     
                    <div key = {book.id} className = 'list-item' > 
                        <div className = 'list-image' style = {{backgroundImage: 'url(' + book.image + ')'}} > </div>

                        <div className = 'list-properties' > 
                            <span className = 'list-prop list-name' > {book.name} </span>
                            <span className = 'list-prop list-by' > By: {book.author} </span>
                            <span className = 'list-prop list-by' > Price: {book.price}$ </span>
                        </div>

                        <div className="list-actions" >
                            {actions.map((action) => 
                                <div className="list-icon" key={action.id} 
                                     style = {{backgroundImage: 'url(' + action.image + ')'}} 
                                     onClick = {() => action.action(book.id)} > 
                                </div>
                            )}
                        </div>
                    </div>
                  )}
                </div>
            </div>
        </div>
    );
  }
}

export default List;