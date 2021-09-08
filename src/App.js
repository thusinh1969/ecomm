import React from 'react';
import './App.css';

import { Route, Link, Switch } from 'react-router-dom';

import HomePage from './components/homepage/homepage';

import Hats_page from './pages/hats_page';

const topicDetails = (props) => {

  console.log(props)
  return (
    <div> 
      <h1>Hello topic {props.match.params.topicID} {props.location.pathname}</h1>
    </div>
  )

}

function App() {
  return (
    <div>
      <h1>Main page</h1>
      <Link to='/topic/'>To topic details</Link>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={Hats_page} />
        <Route exact path='/topic/:topicID' component={topicDetails} />
      </Switch>
    </div>
  )
}

export default App;
