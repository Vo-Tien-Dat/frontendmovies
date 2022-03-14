import './App.css';

import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import InforFilm from './Pages/InforFilm/InforFilm';
import VideoFilm from './Pages/VideoFilm/VideoFilm';
import FindFilm from './Pages/FindFilm/FindFilm';
import routes from './Routers/routes'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function Page(){
  var result = routes.map(
    (component,index) =>
      <Route key = {index}
        path = {component.path}
        exact = {component.exact}
        element =  {component.main()}
      />
  )
  return(
    <Routes>
      {result}
    </Routes>
  )
}

function App() {

  return (
    <div className = "App">
      <Header/>
      <Router>
        {
          <Page/>
        }
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
