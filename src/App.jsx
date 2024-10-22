import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainLayout } from './components';
import { Home, Journal } from './pages';

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
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
