import React, { Component } from 'react';
import './App.css';
import DialogsContainer from './react kabzda/Components/Dialogs/DialogsContainer';
import NavBar from './react kabzda/Components/Navbar/NavBar';
import ProfileContainer from './react kabzda/Components/Profile/ProfileContainer';
import UsersContainer from './react kabzda/Components/Users/UsersContainer';
import Music from './react kabzda/Components/Navbar/Music';
import { Route } from 'react-router-dom';
import HeaderContainer from './react kabzda/Components/Header/HeaderContainer';
import Login from './react kabzda/Components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './react kabzda/redux/app-reduser'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './react kabzda/Components/Common/Preloader/Preloader';

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()      
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavBar />
          <div className='app-wrapper-content'>

            <Route path='/dialogs'
              render={() => <DialogsContainer />} />

            <Route path='/profile/:userId?'
              render={() => <ProfileContainer />} />

            <Route path='/users'
              render={() => <UsersContainer />} />

            <Route path='/login'
              render={() => <Login />} />


            <Route path='/news' component={NavBar} />
            <Route path='/music'> <Music /> </Route>
            <Route path='/setings' component={NavBar} />
          </div>
        </div>      
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App);
