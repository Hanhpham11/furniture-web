import logo from './logo.svg';
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Shop from './pages/Shop';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: ,
  // },
  {
    path: '/shop',
    element: <Shop />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
