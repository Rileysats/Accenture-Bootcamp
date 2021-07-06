import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import Find from './components/Find';
import Bookings from './components/Bookings';
import Stats from './components/Stats';
import Account from './components/Account';

class App extends React.Component{
  render(){
  return (
    <>
    <NavBar/>
    <div>
    <Route exact path="/" component={Main}/>
    <Route exact path="/find" component={Find}/>
    <Route exact path="/bookings" component={Bookings}/>
    <Route exact path="/stats" component={Stats}/>
    <Route exact path="/account" component={Account}/>
    </div>
    <Footer/>
    </>
  );
}
}
export default App;
