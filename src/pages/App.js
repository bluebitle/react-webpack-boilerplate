import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';

import Main from './Main';
import Loading from './Loading';//

//const AsyncPage = importedComponent(() => import( './Result' ), { LoadingComponent: Loading } );
//const AsyncNoPage = importedComponent(() => import( './NoMatch' ), { LoadingComponent: Loading} );

const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={ Main } />
                    {/*<Route exact path="/result" component={ AsyncPage } />
                    <Route component={ AsyncNoPage } />*/}
                </Switch>
            </div>
        </Router>
    );
};

export default App;
