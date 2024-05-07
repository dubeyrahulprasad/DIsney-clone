import React from 'react';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router,Routes ,Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Switch> */}
        <Routes>
        <Route path='/detail' element={<Detail/>} />
        <Route path='/' element={<Home/>} />
        </Routes>
          {/* <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;
