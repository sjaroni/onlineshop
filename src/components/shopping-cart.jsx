import React, { Component } from 'react';

class ShoppingCart extends Component {
  state = {
    items: [
    {
      amount: 1,
      name: 'Sneaker',
      price: 149.95
    },
    {
      amount: 1,
      name: 'Shirt',
      price: 39.99
    },
  ]
  };


  render() {
    return (
      <div className="shopping-cart">
        <h2>Warenkorb</h2>

        { this.state.items.map(item => <div key={item.name}>{ item.amount} { item.name} </div>)}

      </div>
    );
  }
}

export default ShoppingCart;
