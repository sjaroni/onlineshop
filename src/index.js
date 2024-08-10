import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// const element = <h1>Hello World</h1>;
// ReactDom.render(element, document.getElementById('root'));

import Navbar from './components/navbar';
ReactDom.render(<Navbar/>, document.getElementById('root'));