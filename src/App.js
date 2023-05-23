import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from 'react';
import Home from './../src/pages.js/Home';
import {createHashRouter , createRoutesFromElements , Route,RouterProvider} from 'react-router-dom' ;
import Layout from './components.js/layout.js/Layout';
import Contact from './../src/pages.js/contact';
const routes = createHashRouter(createRoutesFromElements(
  <Route path='/' element ={<Layout/>}>
    
    <Route path='/home' element = {<Home/>}/>
    <Route path='/contact' element = {<Contact/>}/>

  </Route>
))
function App() {
  return (
    <Fragment>
      <RouterProvider router={routes} />
    
   </Fragment>
  );
}

export default App;
