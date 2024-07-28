
import {Switch, Route} from 'react-router-dom'

import Home from './Components/Home'
import Login from './Components/Login'
import Register from './Components/Register'
import ContactUs from './Components/ContactUs'

import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path = '/login' component = {Login} />
      <Route exact path = '/register' component = {Register} />
      <Route exact path = '/' component = {Home} />
      <Route exact path = '/contact' component = {ContactUs} />
    </Switch>
  );
}

export default App;
