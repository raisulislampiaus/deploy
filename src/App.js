import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css"
import "antd/dist/antd.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import Products from './pages/Products';





import Category from './pages/Category';

import UpdatePost from './pages/UpdatePost';
import Headerss from './components/Headerss';
import SizeCategory from './pages/SizeCategory';
import ColorCategory from './pages/ColorCategory';
import SingleProduct from './pages/SingleProduct';
import Dashboard from './pages/Dashboard';

function App(props) {
  return (
    <Router>
      {/* <Header /> */}
      <Headerss />
      <div className='container-fluid'>

        <div className='row'>

          {/* <div className='col-2 min-vh-100 bg-light '>

            <Sidebar />
          </div> */}
          <div className='col'>

            <Switch>
              <Route path="/" exact>
                <Dashboard />
              </Route>
             
              <Route path="/products">
                <Products />
              </Route>
              <Route path="/category">
                <Category />
              </Route>
              <Route path="/sizeCategory">
                <SizeCategory />
              </Route>
              <Route path="/colorCategory">
                <ColorCategory />
              </Route>
              
              <Route path="/product/edit/:id">
                <UpdatePost />
              </Route>
              <Route path="/details/:id">
                <SingleProduct />
              </Route>
            </Switch>

          </div>
        </div>
      </div>
    </Router>
  )
}

export default App