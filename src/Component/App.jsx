import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route,Routes } from 'react-router-dom';
import Home from './Home';
import Mov from './Mov';
import Actor from './Actor';
import NavBar from '../NavBar';
import makeStyles from './style';

const App = () => {
  const classes= makeStyles();

return(
    <div className= {classes.root}>
      <CssBaseline/>
      <NavBar/>
      
      <main>
      <div className={classes.toolbar}></div>
<Routes>
  <Route exact path="/" element={<Home/>}>

  </Route>
  <Route exact path="/Movies" element={<Mov/>}>
  Movies
  </Route>
  <Route exact path="/actors/:id" element={<Actor/>}>
  
  </Route>
</Routes>
      </main>
        </div>
)
  
}

export default App;