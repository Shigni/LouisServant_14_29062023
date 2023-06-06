/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import { CreatePage, List } from './pages';
import { Header, Footer } from './components';

export const EmployeeContext = createContext({
  employeeList: [],
  setEmployeeList: () => {},
});

function App() {
  const [employeeList, setEmployeeList] = useState([]);

  const emptyList = useMemo(
    () => ({ employeeList, setEmployeeList }),
    [employeeList]
  );

  return (
    <div className="app">
      {useMemo(
        () => (
          <>
            <EmployeeContext.Provider value={emptyList}>
              <Router>
                <Header />
                <Routes>
                  <Route path="/" element={<CreatePage />} />
                  <Route path="/list" element={<List />} />
                </Routes>
                <Footer />
              </Router>
            </EmployeeContext.Provider>
          </>
        ),
        []
      )}
    </div>
  );
}

export default App;
