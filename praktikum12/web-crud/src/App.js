import logo from './logo.svg';
import './App.css';
import BlogPost from './container/BlogPost/BlogPost';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={BlogPost} />
        {/* <Route exact path="/product" component={Product} /> */}
        {/* <Route exact path="/product/:id" component={ProductDetail} /> */}
        {/* <Route exact path="/cart" component={Cart} /> */}
        {/* <Route exact path="/checkout" component={Checkout} /> */}
        {/* <Route exact path="/about" component={About} /> */}
        
      </Switch>
    </>
  );
}

export default App;
