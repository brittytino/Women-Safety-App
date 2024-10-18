//Imports
//React
import React, { useState } from 'react';
//Styles
import './styles/app.css';
//Components & Routes
// import { Loading, Home } from './routes/index';
import Home from './routes/Home';
import Loading from './routes/Loading';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Menu from './routes/Menu';
import { exitContext, welcomingContext } from './utils/context';
import ExploreButton from './components/ExploreButton';
import NewHome from './routes/NewHome';


function App() {
  //states
  const [welcoming , setWelcoming] = useState<boolean>(true)
  const [exit , setExit] = useState<boolean>(false)
  //lifecycle management

  return (
    <div className='app'>
      <Router>
        <welcomingContext.Provider value={{ welcoming, setWelcoming }}>
          <exitContext.Provider value={{ exit, setExit }}>
        <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/newhome' element={<NewHome />} />
            <Route path='/' element={<Loading />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/explorebutton' element={<ExploreButton />} />
        </Routes>
          </exitContext.Provider>
        </welcomingContext.Provider>
      </Router>
    </div>
  );
}

export default App;
