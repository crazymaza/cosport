import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import RegistryPage from './pages/homePage/registry/registryPage/RegistryPage';

const pagesElementPath: Array<{ path: string, element: JSX.Element }> = [
  { path: 'teams', element: <></>},
  { path: 'events', element: <></>},
  { path: 'users', element: <></>},
  { path: 'settings', element: <></>},
]

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<RegistryPage />} />
        {pagesElementPath.map(({path, element}) => {
          return <Route key={path} path={path} element={element} />
        })}
      </Route>
    </Routes>
  );
}

export default App;
