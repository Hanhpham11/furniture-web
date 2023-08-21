import logo from './logo.svg';
import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Shop from './Shop/Shop.js';
import Home from './Home/Home';
<<<<<<< HEAD
import Contact from './component/Contact Us/Contact';
import Checkout from './component/Chech out/Checkout';
import { ShopProvider1 } from './component/ShopContext1';
=======
import Details from './DetailsProducts/Details';
>>>>>>> 0db4408bb14bc0d1e624a9c04b129e6291001b57

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
    path: '/Contact Us',
    element: <Contact />,
  },
  {
    path: '/Check out',
    element: <Checkout />,
  },
  {
    path: '/detail/:id',
    element: <Details />,
  },
]);

const App = () => {
  return (
    <ShopProvider1>
      <RouterProvider router={router} />
    </ShopProvider1>
  );
};

export default App;
