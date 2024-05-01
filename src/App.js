import "./App.css";

import {Routes , Route, Navigate} from "react-router-dom";
import Login from "./Routes/Login";
import Home from "./Routes/Home";
import New from "./Routes/New";
import Records from "./Routes/Records";
import Profile from "./Routes/Profile";
import {Authorized} from "./Routes/Login"




function App() {

 
  

  const PrivateRoute = ({children}) =>{
    return !Authorized ? <Navigate to = "/"/> : children ;
  };

  return (
    <div className="App">
      
          <Routes>

            <Route exact path = "/" element={<Login/>}/> 

            <Route exact path ="/home" element={<PrivateRoute><Home/></PrivateRoute> }/>
            <Route exact path ="/new" element={<PrivateRoute><New/></PrivateRoute> }/>
            <Route exact path ="/records" element={<PrivateRoute><Records/></PrivateRoute> }/>
            <Route exact path ="/profile" element={<PrivateRoute><Profile/></PrivateRoute> }/>
            <Route exact path ="*" element={<Login/>}/>
           
          </Routes>
     
    </div>
  );
}

export default App;
