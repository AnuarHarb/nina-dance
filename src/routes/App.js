import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from '../components/layout/navbar';
import Footer from '../components/layout/footer';

import Landing from '../components/landingPage';
import Creations from '../components/creations';
import Workshops from '../components/workshops';

const App = () => {

  useEffect(() => {
    ReactGA.initialize('UA-163982682-1');
  })

  return (
    <BrowserRouter>
      <Navbar />
        <Switch>
          <Route exact path="/" >
            <Landing />
          </Route>
          <Route path="/bailando-con-nina" >
            <Workshops />
          </Route>
          <Route path="/creaciones" >
            <Creations />
          </Route>
        </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
