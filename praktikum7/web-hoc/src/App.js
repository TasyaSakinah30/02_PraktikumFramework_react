import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, } from 'react-router-dom';
import CustomFormDemo from './CustomForm/CustomFormDemo';
import GenericContainerDemo from './GenericContainer/GenericContainerDemo';
import LoaderDemo from './LoadDemo/LoaderDemo';
import RequireAuthDemo from './ProtectedRoutes/RequireAuthDemo';
import RefsDemo from './RefsDemo/RefsDemo';

function App() {
  return (
    <div className="App">
      <BrowserRouter>  
        <Route path="/form" component={CustomFormDemo} />     
        <Route path="/loader" component={LoaderDemo} />
        <Route path="/generic" component={GenericContainerDemo} />
        <Route path="/auth" component={RequireAuthDemo} />   
        <Route path="/refs" component={RefsDemo} />
      </BrowserRouter>

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
    </div>
  );
}

export default App;
