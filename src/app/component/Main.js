import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {ProductAdd} from "./product/ProductAdd";
import {ProductDelete} from "./product/ProductDelete";
import {Home} from "./Home"
import {Header} from "./basic-ui/Header";

export class Main extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/home" component={Home}/>
                    <Route path="/productadd" component={ProductAdd}/>
                    <Route path="/productdelete" component={ProductDelete}/>
                </Switch>
            </div>

        );
    }

}