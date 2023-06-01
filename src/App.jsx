import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import { CreatePage, List } from './pages';
import { Header, Footer } from './components';
function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<CreatePage />} />
          <Route path="/list" element={<List />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
