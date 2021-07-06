import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {Route} from 'react-router-dom';
import './App.css';
import Main from './components/Main';

class App extends React.Component{
  render(){
  return (
    <>
    <NavBar/>
    <Route exact path="/" component={Main}/>
    <Footer/>
    </>
  );
}
}
export default App;
