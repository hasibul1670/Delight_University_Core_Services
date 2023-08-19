import express from 'express';

import { AdminRoutes } from '../modules/admin/admin.route';
import { AuthRoutes } from '../modules/auth/auth.route';

import { OrderRoutes } from '../modules/cart/order.routes';
import { ProductRoutes } from '../modules/product/product.routes';
import { ProductRequestRoutes } from '../modules/productRequest/productRequest.routes';
import { StudentRoutes } from '../modules/student/student.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/admins',
    route: AdminRoutes,
  },
  {
    path: '/products',
    route: ProductRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/auth',
    route: AuthRoutes,
  },
  {
    path: '/order',
    route: OrderRoutes,
  },
  {
    path: '/productRequest',
    route: ProductRequestRoutes,
  },
];

moduleRoutes.forEach(r => router.use(r.path, r.route));

export default router;
