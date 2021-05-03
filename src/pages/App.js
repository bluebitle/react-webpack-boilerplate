import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Main from './Main';
import Loading from './Loading';//

//const AsyncPage = importedComponent(() => import( './Result' ), { LoadingComponent: Loading } );

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Main } />
                </Switch>
            </div>
        </Router>
    );
};

export default App;
