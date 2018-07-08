
import React, { Component } from 'react';
import './cart.component.css';

class Cart extends Component {
  
   constructor(props){
      super(props)

   }

   calculateSum(list){
        let sum = 0;
        list.map((item) => {
            sum += item.product.price * item.amount;
        });
        return sum;
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
        this.props.onRemoveItem(id);
   }

   render() {
    
        let list = this.setBasket(this.props.items);

        return (
            <div className = 'cart-main' >

                <div className = 'cart-body' > 

                    <div className = 'cart-header' > 
                        <span className = 'cart-title' > Your Cart: </span>
                        <span className = 'cart-subTitle' > Total: {this.calculateSum(list)}$ </span>
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

export default Cart;