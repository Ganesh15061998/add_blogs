import './App.css';
import NavBar from './Navbar'
import Home from './Home'
import Create from './Create'
import BlogDetails from './BlogDetails'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
    return ( <
        Router >
        <
        div className = "App" >
        <
        NavBar / >
        <
        div className = "container" >
        <
        Switch >

        <
        Route exact path = "/" >
        <
        Home / >
        <
        /Route>   

        <
        Route path = '/create' >
        <
        Create / >
        <
        /Route>

        <
        Route path = "/blogs/:id" >
        <
        BlogDetails / >
        <
        /Route>

        <
        /Switch>       

        <
        /div>     <
        /div>        <
        /Router> 
    );
};

export default App;