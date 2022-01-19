import React, { Component, Suspense, lazy } from 'react';
import './App.css';
import NavBar from './react kabzda/Components/Navbar/NavBar';
import UsersContainer from './react kabzda/Components/Users/UsersContainer';
import Music from './react kabzda/Components/Navbar/Music';
import { Route, Switch } from 'react-router-dom';
import HeaderContainer from './react kabzda/Components/Header/HeaderContainer';
import Login from './react kabzda/Components/Login/Login';
import { connect } from 'react-redux';
import { initializeApp } from './react kabzda/redux/app-reduser'
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import Preloader from './react kabzda/Components/Common/Preloader/Preloader';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {AppStateType, store} from './react kabzda/redux/redux-store'

let DialogsContainer = lazy(() => import('./react kabzda/Components/Dialogs/DialogsContainer'));
let ProfileContainer = lazy(() => import('./react kabzda/Components/Profile/ProfileContainer'));


type PropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
  initializeApp: () => void
}


class App extends Component<PropsType & DispatchPropsType > {
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
          
            <Suspense fallback={<Preloader />}>
              <Switch >
                <Route path='/dialogs' component={DialogsContainer} />
                <Route path='/profile/:userId?' component={ProfileContainer} />
              </Switch>
            </Suspense>

            <Route path='/users'
              render={() => <UsersContainer pageTitle={'Samuraui'} />} />
            <Route path='/login'
              render={() => <Login />} />


            <Route path='/news' component={NavBar} />
            <Route path='/music'> <Music /> </Route>
            <Route path='/setings' component={NavBar} />

            {/* <Route path='*'
              render={() => <div>404 NOT FOUND </div>} /> */}
         
        </div>
      </div >
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
})

let AppContainer = compose<React.ComponentType>( withRouter, connect(mapStateToProps, { initializeApp }))(App);

const SamuraiJSApp: React.FC= () => {
  return <BrowserRouter>
  <Provider store={store}>
    <AppContainer  />
  </Provider>
</BrowserRouter>
}

export default SamuraiJSApp 