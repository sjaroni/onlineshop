import React, { Component } from 'react';
import Navbar from './components/navbar';
import Product from './components/product';

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className='product-container'>
          <Product
            title='Sneaker'
            image='sneaker.jpg'
            description='Komfortabel atmungsaktiv, Herrenschuhe Material perforiertes Design, atmungsaktiv, bequem.'
          />
          <Product
            title='Jeans'
            image='jeans.jpg'
            description='Moderne Denim Jeans in verschiedenen Waschungen - Hochwertige Verarbeitung'
          />
          <Product title='Cap' image='cap.png' description="Casual Look - Die perfekte Cap wenn es mal etwas schlichter sein soll"/>
          <Product title='Shirt' image='shirt.png' description="Das T-Shirt hat im Vergleich zu einem normalen T-Shirt ..."/>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
