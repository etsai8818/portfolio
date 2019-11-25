import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import About from './components/About/About';
import Scyre from './components/Cases/Scyre';
import Gema from './components/Cases/Gema';
import Avian from './components/Cases/Avian';
import Debitz from './components/Cases/Debitz';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const Root = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/about" component={About} />
            <Route path="/scyre" component={Scyre} />
            <Route path="/gema" component={Gema} />
            <Route path="/avian" component={Avian} />
            <Route path="/debitz" component={Debitz} />
        </Switch>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
