import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from "./components/Field";
import NavBar from "./components/NavBar/NavBar";
import Card from './components/Card/Card'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'


function App() {
    return (
        <Router>
            <div className='container'>


                <NavBar/>
                <Route path='/Card' render={Card}/>
                <Route path='/Field' render={Field}/>


            </div>
        </Router>


    )
}

export default App;