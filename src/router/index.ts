import NotFound from '../components/not-found';
import HomeRoute from '../features/home/route';
import ProductRoute from '../features/product/route';
import CategoryRoute from '../features/category/route';

const appRoutes = [...HomeRoute, ...ProductRoute, ...CategoryRoute];

export default [
  ...appRoutes,
  {
    path: '*',
    layout: {
      header: false,
      footer: false,
    },
    component: NotFound,
  },
];
