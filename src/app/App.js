import { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Home from '../home/Home';
import SneksPage from '../sneks/SneksPage';
import SnekDetailPage from '../sneks/snek-details';
import SnekList from '../sneks/SnekList';
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
              <Route path="/" exact={true}
                render={routerProps => (
                  <Home {...routerProps} />
                )}
              />

              <Route path="/sneks" exact={true}
                render={routerProps => (
                  <SneksPage {...routerProps} />
                )}
              />

              <Route path="/sneks/:id"
                render={routerProps => (
                  <SnekDetailPage {...routerProps.match.params.id} />
                )}
              />

              <Redirect to="/" />

            </Switch>
          </main>
          <Footer />
        </Router>
      </div>
    );
  }

}

export default App;
