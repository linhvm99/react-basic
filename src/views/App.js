import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';
import ListTodo from './Todos/ListTodo';
import Nav from './Nav/Nav';

// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import Home from './Example/Home';
import {
  BrowserRouter,
  Route,
  Switch
} from "react-router-dom";
import ListUser from './Users/ListUser';
import DetailUser from './Users/DetailUser';


/**
 * 2 components: class component / function component (function, arrow function)
 * JSX
 * 
 */

function App() {
// const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          
          {/* <MyComponent /> */}
          {/* <ListTodo /> */}
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <ListTodo />
            </Route>
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>
              <ListUser />
            </Route>
            <Route path="/user/:id">
              <DetailUser />
            </Route>
          </Switch>
          
        </header>











        {/* <ToastContainer
          position="top-right"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
