import React from 'react';
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';
import CollectionPage from './pages/collection/collection-page.component';
import CollectionsOverview from './components/collections-overview/collections-overview.component';
import Header from './components/header/header.component';

import { auth, createUserProfileDocument } from './firebase/firebase.util';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
              id:snapshot.id,
              ...snapshot.data()
          }, () => {
            console.log(this.state);
          })
        });
      }
      else{
        this.props.setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header />
        <Routes mode="absolute">
          <Route path='/' element={<HomePage />} />
          <Route path="shop" element={<ShopPage />} > 
            <Route path="/shop" element={<CollectionsOverview />} />
            <Route path="/shop/:id" element={<CollectionPage />} />
          </Route>
            
          
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/signin' element={this.props.currentUser ? <Navigate to='/' /> : <SignInAndSignUpPage /> } />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))  
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
