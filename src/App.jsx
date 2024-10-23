import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components';
import { Home, Journal } from './pages';
import { MovieDetail } from './pages/MovieDetail';

const basePath = '';
const router = createBrowserRouter([
  {
    path: basePath,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'journal',
        element: <Journal />,
      },
      {
        path: 'movie/:id',
        element: <MovieDetail />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
