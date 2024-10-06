import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import './Css/locomotive-scroll.css';
import Hero from './Hero/Hero';


import MembersPages from './components/MembersPages';
import Event from './components/Events/Event';

import Team from './components/Developer/Team';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Hero />} />
        
        <Route path='/members' element={<MembersPages />} />
       <Route path='/events' element = {<Event/>} />
        <Route path = '/devTeam' element = {<Team/>} />
      </Routes>
    </Router>
  );
}

export default App;
