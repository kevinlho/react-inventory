import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import {Main} from "./component/Main";

class App extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <BrowserRouter>
                        <Main/>
                    </BrowserRouter>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));