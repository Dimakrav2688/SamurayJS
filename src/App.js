import React from 'react';
import './App.css';
import DialogsContainer from './react kabzda/Components/Dialogs/DialogsContainer';
import NavBar from './react kabzda/Components/Navbar/NavBar';
import ProfileContainer from './react kabzda/Components/Profile/ProfileContainer';
import UsersContainer from './react kabzda/Components/Users/UsersContainer';
import Music from './react kabzda/Components/Navbar/Music';
import { BrowserRouter, Route } from 'react-router-dom';
import HeaderContainer from './react kabzda/Components/Header/HeaderContainer';






const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <HeaderContainer />
        <NavBar />
        <div className='app-wrapper-content'>

          <Route path='/dialogs' render={() => <DialogsContainer />} />

          <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
          
          <Route path='/users' render={() => <UsersContainer />}  />
          

          <Route path='/news' component={NavBar} />
          <Route path='/music'> <Music /> </Route>
          <Route path='/setings' component={NavBar} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
