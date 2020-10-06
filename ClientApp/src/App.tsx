import * as React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';
import Home from './components/Home';
import SendHome from './components/Send/Home';
import Receive from './components/Receive';

import './custom.css'
import ConfiguratorEventListener from './components/ConfiguratorEventListener';
import SetScreenOption from './components/Send/SetScreenOption';
import Configure from './components/Send/Configure';

export default () => (
    <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/send/home' component={SendHome} />
        <Route path='/send/setScreenOption' component={SetScreenOption} />
        <Route path='/send/configure' component={Configure} />
        <Route path='/receive' component={Receive} />
        <ConfiguratorEventListener />
    </Layout>
);
