import logo from './logo.svg';
import './App.css';
import BlogPost from './container/BlogPost/BlogPost';
import { Route, Switch } from 'react-router-dom';
import Navbar from './container/Navbar';
import Home from './container/Home';
// import Cart from './container/Cart';
import Keranjang from './container/Keranjang';
import About from './container/About';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/product" component={BlogPost} />
        {/* <Route exact path="/cart" component={Cart} /> */}
        <Route exact path="/keranjang" component={Keranjang} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/product" component={Product} /> */}
        {/* <Route exact path="/product/:id" component={ProductDetail} /> */}
        {/* <Route exact path="/checkout" component={Checkout} /> */}
        {/* <Route exact path="/about" component={About} /> */}
        
      </Switch>
    </>
  );
}

export default App;
