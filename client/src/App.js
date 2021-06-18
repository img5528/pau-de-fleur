import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import Home from './pages/Home/Home.component';
import Shop from './pages/Shop/Shop.component';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp.component';
import Checkout from './pages/Checkout/Checkout.component';

import Header from './components/Header/Header.component';

import { selectCurrentUser } from './redux/User/User.selectors';
import { checkUserSession} from './redux/User/User.actions';

const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => {
    checkUserSession()
  }, [checkUserSession]);

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={Checkout} />
        <Route
          exact
          path='/signin'
          render={ () =>
            currentUser 
            ? <Redirect to='/' /> 
            : <SignInSignUp />
          }
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
