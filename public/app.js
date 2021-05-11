import { Component } from 'react';
import Header from './Common/Header';
import Footer from '/.Footer';
import Home from '../home/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Header />
          <main>

            <Switch>
              <Route path='/' exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path={routerPropes => (
                <div>Implement a page of resources</div>
              )}
              />

              Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }
}