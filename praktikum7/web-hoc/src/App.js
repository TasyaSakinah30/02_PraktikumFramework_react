import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Switch, Route, } from 'react-router-dom';
import CustomFormDemo from './CustomForm/CustomFormDemo';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo';
import LoaderDemo from './LoadDemo/LoaderDemo';
import RequireAuthDemo from './ProtectedRoutes/RequireAuthDemo';
import RefsDemo from './RefsDemo/RefsDemo';
import { Component } from 'react';

const App  = () => {
  return (
    <BrowserRouter>
      <Navbar />     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/form" component={CustomFormDemo} />
        <Route path="/loader" component={LoaderDemo} />
        <Route path="/generic" component={GenericContainerDemo} />
        <Route path="/auth" component={RequireAuthDemo} />
        <Route path="/refs" component={RefsDemo} />
      </Switch>
    </BrowserRouter>
  );
}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    
const Navbar = () => {
  return (
    <ul>
      <li className="nav-item active"><Link to="/">Home</Link></li>
      <li><Link to="/form">CustomForm</Link></li>
      <li><Link to="/loader">Loader Demo</Link></li>
      <li><Link to="/generic">Generic Container</Link></li>
      <li><Link to="/refs">Refs Demo</Link></li>
      <li><Link to="/auth">Require Auth Demo</Link></li>
    </ul>
      
  )
}
const Home = () => {
  return(
    <div> Home </div>)
}
export default App;
