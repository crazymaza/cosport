import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import MainPage from './pages/mainPage/MainPage';
import RegistryPage from './pages/registry/registryPage/RegistryPage';
import SportGrounds from './pages/sportGrounds/SportGrounds';

const pagesElementPath: Array<{ path: string, element: JSX.Element }> = [
  { path: 'sportground', element: <SportGrounds />},
  { path: 'teams', element: <></> },
  { path: 'events', element: <></> },
  { path: 'users', element: <></> },
  { path: 'settings', element: <></> },
  { path: 'auth', element: <RegistryPage /> },
  { path: 'registration', element: <RegistryPage /> },
]

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<MainPage />} />
        {pagesElementPath.map(({ path, element }) => {
          return <Route key={path} path={path} element={element} />
        })}
      </Route>
    </Routes>
  );
}

export default App;
