import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { NavBar, Home, Cart, ProductsItem } from '../component'

function ReactRouter() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Cart" component={Cart} />
                <Route exact path="/:id" component={ProductsItem} />
                <Route path="*" element={<h4 style={{ marginTop: "10px", textAlign: "center" }}>404 Not Found</h4>} />
            </Switch>
        </Router>
    );
}

export default ReactRouter