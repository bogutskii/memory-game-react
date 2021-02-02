import React, {useState, useEffect} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Field from "./components/Field";
import NavBar from "./components/NavBar/NavBar";
import Card from './components/Card/Card'
import Rules from "./components/Rules";
import Footer from "./components/Footer/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'


function App() {
    const [cards, setCards] = useState(16)

    return (
        <Router>
            <div className='container'>


                <NavBar/>

                <Route path='/Card' render={<Card cards={cards}
                                                  setCards={(cards) => setCards(cards)}/>}
                />

                {/*<Route path='/Card' render={Card}/>*/}
                <Route path='/Field' render={Field}/>
                <Route path='/Rules' render={Rules}/>

                <Footer/>
            </div>
        </Router>


    )
}

export default App;