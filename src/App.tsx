import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import HomePage from './pages/homePage/HomePage';

const pagesElementPath: Array<{ path: string, element: JSX.Element }> = [
  { path: 'team', element: <></>},
  { path: 'events', element: <></>},
  { path: 'users', element: <></>},
  { path: 'settings', element: <></>},
]

const App: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />} >
        <Route index element={<HomePage />} />
        {pagesElementPath.map(({path, element}) => {
          return <Route key={path} path={path} element={element} />
        })}
      </Route>
    </Routes>
  );
}

export default App;
