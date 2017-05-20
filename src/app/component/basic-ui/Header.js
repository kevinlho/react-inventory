import React from 'react';
import {Link} from 'react-router-dom';
import { NavDropdown, MenuItem } from 'react-bootstrap'

import {ProductAdd} from "../product/ProductAdd";

export class Header extends React.Component {
    render(){
        return(
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>

                            <NavDropdown title="Product" id="basic-nav-dropdown">
                                <MenuItem><Link to="/productadd">Add</Link></MenuItem>
                                <MenuItem><Link to="/productdelete">Delete</Link></MenuItem>
                                {/*<MenuItem divider />*/}
                                {/*<MenuItem eventKey={3.4}>Separated link</MenuItem>*/}
                            </NavDropdown>

                            <li><Link to="/productadd">Add</Link></li>
                            <li><Link to="/productdelete">Delete</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
