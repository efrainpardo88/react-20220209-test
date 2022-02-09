import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Bing from './components/pages/bing/Bing';
import Home from './components/pages/home/Home';
import MainLayout from './components/pages/layout/main-layout/MainLayout';
import { useAppDispatch } from './store/hooks';
import { setPageTitle } from './store/slices/PageTitleSlice';

function NoMatch(props: any) {
  // Set Title Page to browser
  const { titlePage } = props;
  if (titlePage) {
    const dispatch = useAppDispatch();
    dispatch(setPageTitle(titlePage));
  }

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
            element={<Home titlePage="Home" />}
          />
          <Route
            path="bing"
            element={<Bing titlePage="Bing Search" />}
          />
          <Route
            path="*"
            element={<NoMatch titlePage="Not Found Page" />}
          />
          {/* Here we can add protected routes
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
