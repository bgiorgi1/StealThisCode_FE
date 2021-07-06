// Imports
import React, { Component, useEffect, useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
// CSS
import './App.css';
// Components
import Welcome from './components/Welcome';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
import CreateSnippet from './components/CreateSnippet';
import ShowSnippet from './components/ShowSnippet'
import ShowSnippetDetails from './components/ShowSnippetDetails';
import NotFoundPage from './components/NotFoundPage';
import Edit from './components/NotFoundPage'
import UpdateSnippetInfo from './components/UpdateSnippetInfo';

// Private route component
const PrivateRoute = ({ component: Component, ...rest }) => {
    console.log('This is a private route...')
    let user = localStorage.getItem('jwtToken');

    return <Route {...rest} render={ (props) => {
        return user ? <Component {...rest} {...props} /> : <Redirect to='/login' />
    }}/>
}


function App() {
  // Set state values
  const [currentUser, setCurrentUser] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    let token;
    // if there is no token inside localStorage, then the user is not authenticated
    if (!localStorage.getItem('jwtToken')) {
        console.log('is not authenticated...');
        setIsAuthenticated(false);
    } else {
        token = jwt_decode(localStorage.getItem('jwtToken'));
        console.log('token', token);
        setAuthToken(token); // come back to this. 
        setCurrentUser(token);
    }
  }, []);

  const nowCurrentUser = userData => {
      console.log('--- inside nowCurrentUser ---');
      console.log( userData)
      setCurrentUser(userData);
      setIsAuthenticated(true); 
  }

  const handleLogout = () => {
      if (localStorage.getItem('jwtToken')) {
          localStorage.removeItem('jwtToken'); // if there is a token, then remove it
          setCurrentUser(null); // set the currentUser to null
          setIsAuthenticated(false) // set is auth to false
      }
  }

  return (
    <div className="App container-fluid">
      <Navbar isAuth={isAuthenticated}  handleLogout={handleLogout} />
      <div className="container-fluid">
          <Switch>
              {/* routes will go inside of here */}
              <Route path='/signup' component={ Signup } />
              <Route path='/login' 
                render={ (props) => <Login {...props} user={currentUser} nowCurrentUser={nowCurrentUser} setIsAuthenticated={setIsAuthenticated} /> } />
              <Route path='/about' component={ About } />
              <Route exact path='/' component={ Welcome } />
              <PrivateRoute path='/profile' component={ Profile } user={currentUser} handleLogout={handleLogout} />
              <PrivateRoute path='/CreateSnippet' component={ CreateSnippet } user={currentUser} handleLogout={handleLogout} />
              <PrivateRoute path='/UpdateSnippet/:id' component={ UpdateSnippetInfo } user={currentUser} handleLogout={handleLogout} />
              <Route path='/ShowSnippet' component={ ShowSnippet } />
              <Route path='/ShowSnippetDetails/:id' render={(renderProps)=> <ShowSnippetDetails {...renderProps} user={currentUser}/> } />
              <PrivateRoute path="/profile/edit/:id" component={Edit} user={currentUser} setUser={(userData) => nowCurrentUser(userData)} handleLogout={handleLogout}/>
			      	<Route path="*" component={NotFoundPage}/>

          </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;