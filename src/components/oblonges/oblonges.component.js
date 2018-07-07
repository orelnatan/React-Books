import React, { Component } from 'react';
import './oblonges.component.css';

class Oblonges extends Component {
  
  actions = [
    {label: 'Add to cart', id: 432, image: require('../../assets/images/add-to-cart.png'), action: (id) => {this.addToCart(id)}},
    {label: 'Delete item', id: 321, image: require('../../assets/images/remove-from-cart.png'), action: (id) => {this.deleteItem(id)}}
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
        <div className = 'oblonges-main' >
            <div className = 'oblonges-body' >
                <div className = 'oblonges-oblonges' >  
                  {list.map((book) =>     
                    <div key = {book.id} className = 'oblonges-oblonge' > 
                        <div className = 'oblonges-image' style = {{backgroundImage: 'url(' + book.image + ')'}} > </div>

                        <div className = 'oblonges-properties' > 
                            <span className = 'oblonges-prop oblonges-name' > {book.name} </span>
                            <span className = 'oblonges-prop oblonges-by' > By: {book.author} </span>
                            <span className = 'oblonges-prop oblonges-by' > Price: {book.price}$ </span>
                        </div>

                        <div className="oblonges-actions" >
                            {actions.map((action) => 
                                <div className="oblonges-icon" key={action.id} 
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

export default Oblonges;



{/* <div className = 'oblonges-properties' >
                            <span className = 'oblonges-prop oblonges-name' > {item.name} </span>
                            <span className = 'oblonges-prop oblonges-by' > By: {item.author} </span>
                            <span className = 'oblonges-prop oblonges-cost' > Price: {item.price}$ </span>
                        </div> */}