import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element ={<div>Home page</div>}/>
        <Route path="/support" element ={<div>Support Page</div>}/>
        <Route path="/about"   element ={<div>About Page</div>}/>
        <Route path="/labs"   element ={<div>Labs page</div>}/>
        <Route path="*"   element ={<div>Not found page</div>}/>
      </Routes>
    
    </div>
  );
}

export default App;
