import {BrowserRouter as Router, Route } from 'react-router-dom';import './App.css';
import Header from "./component/layout/Header/Header";
import Homeall from "./component/Home/Homeall";
import ProjectDetails from "./component/ProjectDetail/ProjectDetails";
import Register from "./component/User/Register";
import Login from './component/User/Login';
import SeeAmazing from "./component/Home/SeeAmazing";
import { useSelector } from "react-redux";

function App() {
  const {isAuthenticated,user}=useSelector((state)=>state.user);
  return (
   <>
   <Router>
   <Header />
   <Route exact path="/all" component={Homeall} />
   <Route exact path='/' component={SeeAmazing}/>
   <Route exact path="/register" component={Register} />

   <Route exact path="/projectDetail/:id" component={ProjectDetails} />
   
   <Route exact path="/login" component={Login}/>
   
   </Router>
   </>
  )
}

export default App
