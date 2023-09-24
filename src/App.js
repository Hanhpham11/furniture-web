import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import Shop from './Shop/Shop.js';
import Home from './Home/Home';
import Contact from './component/Contact Us/Contact';
import Checkout from './component/Checkout/Checkout';
import {
  ShopProvider1,
  ShopProvider2,
  ShopProvider3,
  ShopProvider4,
  ShopProvider5,
} from './component/ShopContext1';
import Details from './DetailsProducts/Details';
import About from './component/About/About';
import SearchPage from './component/SearchPage';
import Adminproduct from './Admin/Adminproduct';
import Admin from './Admin/Admin';
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
    path: '/ContactUs',
    element: <Contact />,
  },
  {
    path: '/Checkout',
    element: <Checkout />,
  },
  {
    path: '/detail/:id',
    element: <Details />,
  },
  {
    path: '/About',
    element: <About />,
  },

  {
    path: '/Adminproduct',
    element: <Adminproduct />,
  },
  {
    path: '/Admin',
    element: <Admin />,
  },
  {
    path: '/SearchPage',
    element: <SearchPage />,
  },
]);
const App = () => {
  return (
    <ShopProvider5>
      <ShopProvider4>
        <ShopProvider3>
          <ShopProvider2>
            <ShopProvider1>
              <RouterProvider router={router} />
            </ShopProvider1>
          </ShopProvider2>
        </ShopProvider3>
      </ShopProvider4>
    </ShopProvider5>
  );
};

export default App;
