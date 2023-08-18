import logo from './logo.svg';
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Shop from './Shop/Shop.js';
import Home from './Home/Home';
import Details from './DetailsProducts/Details';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/shop',
    element: <Shop />,
  },
  {
    path: '/detail/:id',
    element: <Details />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
