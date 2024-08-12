import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';
import ShoppingCart from './components/shopping-cart';

class App extends Component {
  state = {
    items: []
  };

  addItem = (amount, name, price) => {
    let currentItems = this.state.items;
    currentItems.push({
      amount, name, price
    });
    this.setState({items: currentItems});
    // console.log(this.state);
  }


  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='main-container'>
          <div className='product-container'>
            <Product onAdd={() => this.addItem(1, 'Sneaker', 149.95)} title='Sneaker' image='sneaker.jpg' description='Komfortabel atmungsaktiv, Herrenschuhe Material perforiertes Design, atmungsaktiv, bequem.' />
            <Product onAdd={() => this.addItem(1, 'Jeans', 89.95)} title='Jeans' image='jeans.jpg' description='Moderne Denim Jeans in verschiedenen Waschungen - Hochwertige Verarbeitung' />
            <Product onAdd={() => this.addItem(1, 'Cap', 19.29)} title='Cap' image='cap.png' description='Casual Look - Die perfekte Cap wenn es mal etwas schlichter sein soll' />
            <Product onAdd={() => this.addItem(1, 'Shirt', 39.99)} title='Shirt' image='shirt.png' description='Das T-Shirt hat im Vergleich zu einem normalen T-Shirt ...'/>
          </div>
          <ShoppingCart items={this.state.items}/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
