import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Bing from './components/pages/bing/Bing';
import Home from './components/pages/home/Home';
import MainLayout from './components/pages/layout/main-layout/MainLayout';

function NoMatch() {
  return (
    <div>
      <h2>It looks like you&apos;re lost...</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            index
            element={<Home />}
          />
          <Route
            path="bing"
            element={<Bing />}
          />
          <Route
            path="*"
            element={<NoMatch />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
