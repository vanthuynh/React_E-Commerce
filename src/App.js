import React from 'react';
import { Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

/* we want to store user sign-in info on the App state 
 * to that we can pass it into components that need it */
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    // method from 'auth' library that take function as parameter, this case is what the user state is
    // here even after we refresh the app, firebase still aware that the user is still signed in
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) { // if userAuth is not null
        const userRef = await createUserProfileDocument(userAuth);

        // now use userRef to check if the database has updated at that reference with any new data
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,...snapShot.data()
            }
          }, () => {
            console.log(this.state); // console.log here as 2nd parameter since setState is Asynchronous
          })
        });
      }
      //if user is null 
      else {
        this.setState({ currentUser: userAuth });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render (){
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );

  }
}

export default App;
