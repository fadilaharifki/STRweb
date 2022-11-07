import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import { Home } from 'pages/home';
import { About } from 'pages/about';
import { Contact } from 'pages/contact';
import { Products } from 'pages/products';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

import { StoreProvider } from 'store';

import 'antd/dist/antd.css';
import 'App.scss';

function App() {
  return (
    <HashRouter>
      <StoreProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about-us" component={About} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </StoreProvider>
    </HashRouter>
  );
}

export default App;
