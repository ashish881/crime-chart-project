import React from 'react';
import Chart from './component/Chart'
import Nevada16 from './component/Nevada2016'
import Nevada17 from './component/Nevada2017'
import Nevada18 from './component/Nevada2018'
import Nevada19 from './component/Nevada2019'
import Header from './component/Header'
import './App.css'
import {BrowserRouter,Route,Switch} from 'react-router-dom';

export default function App() {
  return (
    <BrowserRouter>
      <div className="container">   
        <Header/>
        <Switch>
         <Route path='/'component={Chart} exact/>
         <Route path='/2016'component={Nevada16} exact/>
         <Route path='/2017'component={Nevada17} exact/>
         <Route path='/2018'component={Nevada18} exact/>
         <Route path='/2019'component={Nevada19} exact/>
          </Switch>   
      </div>
      </BrowserRouter>
  )
}
