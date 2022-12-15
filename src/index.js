

import ReactDOM from 'react-dom/client';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { App } from './App';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Portfolio from './Component/Portifolio/Portfolio';
import About from './Component/About/About';
import Contact from './Component/Contact/Contact';
import Home from './Component/Home/Home';

const router = createBrowserRouter([
         {path: "" , element: <App/> , children: [
         {path:'portfolio' , element: <Portfolio/>},
         {path:'about' , element: <About/>},
         {path:'contact' , element: <Contact/>},
         {path:'' , element: <Home/> },
         {path:'*' , element: <Home/>},       
    ]},
]);

let myDive = document.getElementById('root');
let rootElement =ReactDOM.createRoot(myDive);

rootElement.render(
    <RouterProvider router={router} />
);

