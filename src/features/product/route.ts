import Product from './index';

export default [
  {
    name: 'product',
    path: '/product/:id',
    exact: true,
    component: Product,
  },
];
