
import React, { Component } from 'react';
import {connect} from 'react-redux';
import {removeBookFromCart} from '../../actions/index';
import {bindActionCreators} from 'redux';
import './cart.component.css';

class Cart extends Component {
  
   constructor(props){
      super(props)

   }

   setBasket(items){

        let basket = {};
        
        for(let i in items){
            let id = items[i].id;
            if(id in basket == false){
                basket[id] = {product: items[i], amount: 1}
            } else {
                basket[id].amount ++;
            }
        }
        return Object.values(basket); //Objects to array collection...
   }

   removeItem = (id) => {
       let book = this.props.cart.find(item => item.id == id);
       this.props.removeBookFromCart(book);
   }


   render() {
    
        let list = this.setBasket(this.props.cart);

        return (
            <div className = 'cart-main' >
                <div className = 'cart-body' > 
                    <div className = 'cart-header' > 
                        <span className = 'cart-title' > Your Cart: </span>
                        <span className = 'cart-subTitle' > Total: {list.map(item => item.product.price * item.amount).reduce((a, b) => a + b, 0)}$ </span>
                    </div>

                    <div className = 'cart-header cart-subHeader' > 
                        <span className = 'cart-subTitle' > Product </span>
                        <div>
                            <span className = 'cart-subTitle' > Price </span>
                            <span className = 'cart-subTitle' > Amount </span>
                        </div>
                    </div>

                    <div className = 'cart-products' >
                        {list.map((item) => 
                            <div className = 'cart-product' key = {item.product.id}  >
                                <div className = 'cart-product-container' >
                                    <div className = 'cart-product-image' style = {{backgroundImage: 'url(' + item.product.image + ')'}} > </div>
                                    <div className = 'cart-product-label' > {item.product.name} </div>
                                </div>
                                <div className = 'cart-product-container' >
                                    <span className = 'cart-detail' > {item.product.price}$ </span>
                                    <span className = 'cart-detail cart-amount' > {item.amount} </span>
                                </div>
                                <div className = 'cart-remove' onClick = {() => this.removeItem(item.product.id)} > </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        );
  }
}

function mapStateToProps(state){
    return {
        cart: state.cart,
    }
}
  
function mapDispatchToProps(dispatch){
    return bindActionCreators({removeBookFromCart: removeBookFromCart,                         
                              }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
