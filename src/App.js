
import "./App.css";
import Home from "./Home/home";
import Aboutme from "./about me/about me";
 import Skills from "./skills/skills";
 import Portfolio from "./portfolio/portfolio";
 import Footer from "./footer/footer";
import Login from "./login/login";
import Register from './register/register';
import ToDoApp from "./todoApp/to-Do-App";
import Header from "./header/header";
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Movies from './movies/Movies';
import Details from "./Details/Details";
import FavoritesMovies from "./favorites/favoritesMovies"

function App() {
  return <>
  <div className="App">
    {/* <Home/>
    <Aboutme/>
    <Skills/>
    <Portfolio/>
    <Footer/> */}
    {/* <div className="container-fluid">
      <div className="row">
        <div classsName="col-6">
        <Login/>
        </div>
        <div classsName="col-6">
        <Register/>
        </div>
      </div>
    </div> */}
     {/* <Login/>
     <Register/> */}
     {/* <ToDoApp/> */}
     
     <Router>
     <Header/>
      <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/register" exact component={Register}/>
      <Route path="/login" exact component={Login}/>
      <Route path="/movies" exact component={Movies}/>
      <Route path="/details/:id" exact component={Details}/>
      <Route path="/favorites" exact component={FavoritesMovies}/>
      </Switch>
     </Router>
  </div>
  </>
 
}

export default App;
