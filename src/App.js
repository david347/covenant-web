import { Chip, Divider } from '@mui/material';
import { Link, Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './header';
import Question from './pages/user/question';
import NewQuestion from './pages/user/question/newQuestion';
import QuorumView from './pages/user/quorum';

function App() {
  return (
    <div className="App">
        <Header />
      
        <Routes>
          <Route path="/" element={<QuorumView />} />
          <Route path="/new-question" element = {<NewQuestion />} />
          <Route path="/question" element={<Question />} />
          <Route path="/quorum" element={<QuorumView />} />
        </Routes>
    </div>
  );
}

export default App;
