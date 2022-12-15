
import { Component } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';

export class App extends Component {
    state = {}

    render(){
        return<>
        <Navbar/>
        <Outlet/>
        </>
    }
}


