import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import './App.css'
import Titlebar from '../components/titlebar'
import Home from './Home'
import Contact from './Contact'
import Tutoring from './Tutoring'


class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Titlebar />
          <LoadingBar /> {/* TODO: styles */}
        </header>
        <main className="Main">
          <Route exact path="/" component={Home} />
          <Route exact path="/mailing-list" component={Contact} /> {/* TODO: change to /contact */}
          <Route exact path="/tutoring" component={Tutoring} />
        </main>
      </div>
    )
  }
}

export default App;
