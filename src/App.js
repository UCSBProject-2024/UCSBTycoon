import { BroweserRouter as Router, Route, Routes } from 'react-router-dom';
import Write from './components/Write';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/write" element={<Write />} />
      </Routes>
    </Router>
  );
}

export default App;