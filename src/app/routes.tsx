import { createBrowserRouter } from 'react-router';
import { Home } from './pages/Home';
import { ProjectDetail } from './pages/ProjectDetail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/project/:slug',
    element: <ProjectDetail />,
  },
]);