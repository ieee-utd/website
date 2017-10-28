import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import MediaQuery from 'react-responsive'
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
        <main>
          <MediaQuery query="(min-width: 600px)" className="size-normal">
            <Route exact path="/" component={Home} />
            <Route exact path="/mailing-list" component={Contact} /> {/* TODO: change to /contact */}
            <Route exact path="/tutoring" component={Tutoring} />
          </MediaQuery>
          <MediaQuery query="(max-width: 600px)" className="size-mobile">
            <Route exact path="/" component={Home} />
            <Route exact path="/mailing-list" component={Contact} /> {/* TODO: change to /contact */}
            <Route exact path="/tutoring" component={Tutoring} />
          </MediaQuery>
        </main>
      </div>
    )
  }
}

export default App;
