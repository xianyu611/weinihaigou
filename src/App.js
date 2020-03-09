import React from 'react';
import "./App.scss"
import { Button } from 'antd';
import {Route,Link,Redirect,Switch} from "react-router-dom"
import {routes} from "./router"
import {homeChild} from "./router"
import Nav from "./components/navigation/appNav"
import HomeChild from "./components/home/navComRouter/hotSale"
import Test from "./test"

function App() {
  return (
    <div className="App">
      <Test></Test>
      <Nav></Nav>
    <Switch>
      {
       
        routes.map((item,index)=>{
          // console.log(item)
          return (
            <Route key={index} path={item.path} component={item.component}></Route>
          )
        })

        
      }
     
      <Redirect from="/" to="/home" exact></Redirect>
    </Switch>
    
    </div>
  );
}

export default App;
