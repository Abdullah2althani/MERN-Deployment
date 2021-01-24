import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Router } from "@reach/router";
import './App.css';
import Homepage from './views/Homepage';
import AddProject from './views/AddProject';
import Frist from './views/Frist';

import "bootstrap/dist/css/bootstrap.css";



function App() {
  const [user, setUser] = useState(null)
  const [Projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/api/Projects")
      .then((res) => { setProjects(res.data) })
      .catch((err) => { console.log(err); })
  }, [])

  return (


    <div className="App">
      
      <Router>

        <Frist path="/" setUser={setUser} />
        <Homepage path="/dashboard" Projects={Projects} setProjects={setProjects} user={user} />
        <AddProject path="/Projects/new"  Projects={Projects} setProjects={setProjects}  />
      </Router>
    </div>
  );
}

export default App;